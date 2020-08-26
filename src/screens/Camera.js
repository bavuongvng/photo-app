import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

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

  const handleTakePhoto = async () => {
    const res = await cameraRef.current.takePictureAsync();
    console.log({ res });
  };

  return (
    <View style={styles.root}>
      <View style={styles.view}>
        <RNCamera ref={cameraRef} style={styles.camera} />
      </View>
      <TouchableOpacity onPress={handleTakePhoto} style={styles.btn}>
        <Text style={styles.label}>Take Photo</Text>
      </TouchableOpacity>
    </View>
  );
};
