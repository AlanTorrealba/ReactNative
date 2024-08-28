import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>HOlA</Text> */}
      <View style={styles.purpleBox}>
        <Text>
            HOLA 22222
        </Text>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 40,
    borderWidth: 10,
    padding: 5,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20 ,
    marginVertical: 50,
    padding: 5,
  },
});
