import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigatorMaps } from '../navigators';
import { checkPermission } from '../utils';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
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

export const Welcome = ({ navigation }) => {
  const gotoCamera = () => {
    navigation.navigate(NavigatorMaps.Camera);
  };
  const gotoUpload = () => {
    navigation.navigate(NavigatorMaps.Upload);
  };

  useEffect(() => {
    checkPermission();
  }, []);

  return (
    <View style={styles.root}>
      <Text>Welcome Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={gotoCamera}>
        <Text style={styles.label}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={gotoUpload}>
        <Text style={styles.label}>Upload Photo</Text>
      </TouchableOpacity>
    </View>
  );
};
