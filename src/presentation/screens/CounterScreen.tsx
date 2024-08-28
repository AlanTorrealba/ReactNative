import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      {/* <PrimaryButton
       label='Incrementar'
       onPress ={()=> setCounter(counter + 1)}
       onLongPress={()=> setCounter(0)}

       
      /> */}
      <Button
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        mode='contained'>
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'white',
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: '#4746AB',
  },
});
