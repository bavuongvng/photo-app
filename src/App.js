import 'react-native-gesture-handler';

import React from 'react';
import { View, StyleSheet } from 'react-native';

import MainNavigator from './navigators';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default () => {
  return (
    <View style={styles.root}>
      <MainNavigator />
    </View>
  );
};
