import axios from 'axios';

const PHOTO_API = 'https://photoslibrary.googleapis.com/v1/';

const instance = axios.create({
  baseURL: PHOTO_API,
});

export const auth = ({ access_token, token_type }) => {
  instance.defaults.headers['Authorization'] = `${token_type} ${access_token}`;
};
export const getAlbums = () => {
  return instance.get('albums');
};

export const uploadPhoto = (data) => {
  instance.defaults.headers['Content-type'] = 'application/octet-stream';
  instance.defaults.headers['X-Goog-Upload-Content-Type'] = 'image/jpeg';
  instance.defaults.headers['X-Goog-Upload-Protocol'] = 'raw';
  return instance.post('uploads', { data });
};
