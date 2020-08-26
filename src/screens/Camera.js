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
        'ya29.a0AfH6SMCd9gkKy9IG-amwCQ3AI3gY07tnAx6Wh-TZIau-XUj6Gl8imReomEJ3ifWy80McGIg6-LnKASTnOQcxHRo276An-sRf1l6qg5PByPXMorpLFuCebElhdz5dKtxzZiwCEwTf4v39eoPSqamdXTZtjGmWtbThFbe0',
      token_type: 'Bearer',
    });
  }, []);

  const handleTakePhoto = async () => {
    const res = await cameraRef.current.takePictureAsync();
    setPhoto(res);
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
  const handleUpload = async () => {
    const data = new FormData();
    data.append('media-binary-data', {
      name: 'AAA',
      uri: photo.uri,
    });
    try {
      const res = await apis.uploadPhoto(data);
      console.log({ resUpload: res });
    } catch (error) {
      console.log({ ErrorUpload: error });
    }
    console.log({ data });
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
