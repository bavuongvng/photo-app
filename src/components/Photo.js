import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  flex: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    padding: 20,
  },
  col: {
    padding: 20,
    width: 250,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  btnSave: {
    backgroundColor: 'orange',
  },
  btnCancel: {
    backgroundColor: 'red',
  },
});

export const Photo = ({ uri, onSave, onCancel }) => {
  return (
    <View style={styles.root}>
      <View style={styles.flex}>
        <Image source={{ uri }} style={styles.img} />
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.col, styles.btnSave]} onPress={onSave}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.col, styles.btnCancel]}
          onPress={onCancel}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
