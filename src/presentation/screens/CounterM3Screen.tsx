import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
export const CounterM3Screen = () => {
  const [counter, setCounter] = useState(1);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>
      {/* <Icon name='accessibility-outline' size={10}></Icon> */}
      <FAB
        style={globalStyles.fab}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        icon="add-outline"
      />
    </View>
  );
};
