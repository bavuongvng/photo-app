import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { apis } from '../core';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  btn: {
    padding: 10,
  },
  btnGet: {
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export const Upload = () => {
  useEffect(() => {
    apis.auth({
      access_token:
        'ya29.a0AfH6SMCTl52ZraDE9ouBU7S5rL5-o-YzPbmHmCsbwV7z9TEhv440nsqGkmyealMX9O9r0ooI2s69QsFYxKwObMyDf1zEI-27wVG7TwyNVx7VSSNg1XOxwbA86A_lqhharMdCRa18sMN7VTJaaLfYwoKUbL__LQ7ufjxB',
      token_type: 'Bearer',
    });
  }, []);

  const getAlbums = async () => {
    try {
      const data = await apis.getAlbums();
      console.log({ data });
    } catch (error) {
      console.log({ errorGetAlbum: error });
    }
  };
  return (
    <View style={styles.root}>
      <Text>Upload Img</Text>
      <TouchableOpacity onPress={getAlbums} style={[styles.btn, styles.btnGet]}>
        <Text style={styles.text}>Get All Album</Text>
      </TouchableOpacity>
    </View>
  );
};
