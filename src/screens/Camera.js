import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

import { Photo } from '../components';
import { apis } from '../core';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  btn: {
    padding: 10,
    backgroundColor: 'orange',
    marginTop: 20,
    borderRadius: 5,
  },
  label: {
    textAlign: 'center',
    color: 'white',
  },
});

export const Camera = () => {
  const cameraRef = useRef();
  const [photo, setPhoto] = useState(null);
  const [list, setList] = useState({});

  useEffect(() => {
    apis.auth({
      access_token:
        'ya29.a0AfH6SMCrT8mC5P9BUGacFlLHmH9y4sze91twmbsSppIzOTyOAbsMt8F9Wxd58emb42FhvTwmRY2kzjNdZxLT-ogYTt9SAXgbLh4znM-yTYfFsRh7GYfiIRxcsgAqrjg0122-wobZscXspp9lG1sO6rVGwO0W3d_liPcM',
      token_type: 'Bearer',
    });
  }, []);

  const handleTakePhoto = async () => {
    const res = await cameraRef.current.takePictureAsync();
    setPhoto(res);
  };

  const handleSave = async () => {
    try {
      await CameraRoll.save(photo, { type: 'photo', album: 'Nails' });
      setPhoto(null);
      console.log('Success');
    } catch (error) {
      console.log({ errorSave: error });
    }
  };
  const handleCancel = () => {
    setPhoto(null);
  };
  const handleUpload = async () => {
    try {
      const photos = { ...list };
      photos[`Anh ${Object.keys(list).length + 1}`] = photo.uri;
      const data = await Promise.all(
        Object.keys(photos).map((key) => apis.upload(photos[key], key)),
      );
      console.log({ UploadSuccess: data });
      setList({});
      setPhoto(null);
    } catch (error) {
      console.log({ error });
    }
  };
  const handleContinue = () => {
    const fileName = `Anh ${Object.values(list).length + 1}`;
    const data = { ...list };
    data[fileName] = photo.uri;
    setList(data);
    setPhoto(null);
  };

  return (
    <View style={styles.root}>
      {photo ? (
        <Photo
          uri={photo.uri}
          onSave={handleSave}
          onCancel={handleCancel}
          onUpload={handleUpload}
          onContinue={handleContinue}
        />
      ) : (
        <>
          <View style={styles.view}>
            <RNCamera ref={cameraRef} style={styles.camera} />
          </View>
          <TouchableOpacity onPress={handleTakePhoto} style={styles.btn}>
            <Text style={styles.label}>Take Photo</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
