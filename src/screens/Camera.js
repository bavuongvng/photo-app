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

  useEffect(() => {
    apis.auth({
      access_token:
        'ya29.a0AfH6SMCTl52ZraDE9ouBU7S5rL5-o-YzPbmHmCsbwV7z9TEhv440nsqGkmyealMX9O9r0ooI2s69QsFYxKwObMyDf1zEI-27wVG7TwyNVx7VSSNg1XOxwbA86A_lqhharMdCRa18sMN7VTJaaLfYwoKUbL__LQ7ufjxB',
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
      const data = await apis.upload(photo.uri, 'testUpload');
      console.log({ UploadSuccess: data });
      setPhoto(null);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <View style={styles.root}>
      {photo ? (
        <Photo
          uri={photo.uri}
          onSave={handleSave}
          onCancel={handleCancel}
          onUpload={handleUpload}
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
