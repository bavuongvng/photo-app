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
        'ya29.a0AfH6SMCd9gkKy9IG-amwCQ3AI3gY07tnAx6Wh-TZIau-XUj6Gl8imReomEJ3ifWy80McGIg6-LnKASTnOQcxHRo276An-sRf1l6qg5PByPXMorpLFuCebElhdz5dKtxzZiwCEwTf4v39eoPSqamdXTZtjGmWtbThFbe0',
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
