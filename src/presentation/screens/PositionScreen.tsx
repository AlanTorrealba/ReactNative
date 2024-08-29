import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const PositionScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.purpleBox} />
      <View style={style.purpleBox2} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#62ebb7',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 629,
  },
  purpleBox2: {
    width: 100,
    height: 100,
    backgroundColor: '#6fd8f2',
    borderWidth: 10,
    borderColor: 'white',
    top: 0,
    left: 0,
  },
});
