import { SafeAreaView} from 'react-native';
import {HellowWorldScreen} from './src/presentation/screens/HellowWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import {PaperProvider} from 'react-native-paper';
import Ioicon from 'react-native-vector-icons/Ionicons';
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Ioicon {...props} />
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HellowWorldScreen name= 'Alan Noel Torrealba Tapia'/> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
