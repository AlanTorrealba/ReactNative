import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Dimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimesionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.5}}></View>
      </View>
      <Text style={styles.title}>
        w:{width}, h:{height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
