import {SafeAreaView} from 'react-native';
import {HellowWorldScreen} from './src/presentation/screens/HellowWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import {PaperProvider} from 'react-native-paper';
import Ioicon from 'react-native-vector-icons/Ionicons';
import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
import {DimesionScreen} from './src/presentation/screens/DimesionScreen';
import {PositionScreen} from './src/presentation/screens/PositionScreen';
import {FlexScreen} from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <Ioicon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HellowWorldScreen name= 'Alan Noel Torrealba Tapia'/> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimesionScreen /> */}
        {/* <PositionScreen/> */}
        {/* <FlexScreen /> */}
        <FlexDirectionScreen/>
      </SafeAreaView>
    </PaperProvider>
  );
};
