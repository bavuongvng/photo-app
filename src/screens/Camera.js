import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

import { Photo } from '../components';

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

  const handleTakePhoto = async () => {
    const res = await cameraRef.current.takePictureAsync();
    setPhoto(res.uri);
    console.log({ res });
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

  return (
    <View style={styles.root}>
      {photo ? (
        <Photo uri={photo} onSave={handleSave} onCancel={handleCancel} />
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
