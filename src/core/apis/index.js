import axios from 'axios';
import RNFetchBlob from 'react-native-fetch-blob';

const config = {
  authorization: '',
};

const PHOTO_API = 'https://photoslibrary.googleapis.com/v1/';
const photoAlbum =
  'AE-IoqJ6CZasvubFEAXWxB8nTmRqKWIZb30z59vFpk0brCGzJpL6gqh47v3b7HcL7GihaUpSLVYE';

const instance = axios.create({
  baseURL: PHOTO_API,
});

export const auth = ({ access_token, token_type }) => {
  config.authorization = `${token_type} ${access_token}`;
  instance.defaults.headers['Authorization'] = `${token_type} ${access_token}`;
};

export const uploadPhoto = (data) => {
  return instance.post('mediaItems:batchCreate', data);
};

export const upload = async (path, name) => {
  const { data } = await RNFetchBlob.fetch(
    'POST',
    'https://photoslibrary.googleapis.com/v1/uploads',
    {
      Authorization: config.authorization,
      'Content-type': 'application/octet-stream',
      'X-Goog-Upload-Content-Type': 'image/jpeg',
      'X-Goog-Upload-Protocol': 'raw',
    },
    RNFetchBlob.wrap(path),
  );
  const res = await uploadPhoto({
    albumId: photoAlbum,
    newMediaItems: [
      {
        simpleMediaItem: {
          uploadToken: data,
          fileName: name,
        },
      },
    ],
  });
  return res;
};
