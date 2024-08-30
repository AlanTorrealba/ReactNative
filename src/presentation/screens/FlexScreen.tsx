import React from 'react';
import {View, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3299ff',
  },
  box1: {
    backgroundColor: '#27a1ff',
    flex: 1,
  },
  box2: {
    backgroundColor: '#57efed',
    flex: 1,
  },
  box3: {
    backgroundColor: '#38ff8e',
    flex: 1,
  },
});
