import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    position: 'absolute',
    zIndex: 99999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

const Loading = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator color="white" />
    </View>
  );
};

export { Loading };
