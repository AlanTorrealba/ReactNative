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
import {FlexDirectionScreen} from './src/presentation/screens/FlexDirectionScreen';
import {FlexScreenTarea2} from './src/presentation/screens/FlexScreenTarea2';
import {FlexScreenTarea3} from './src/presentation/screens/FlexScreenTarea3';
import {FlexScreenTarea4} from './src/presentation/screens/FlexScreenTarea4';
import {FlexScreenTarea5} from './src/presentation/screens/FlexScreenTarea5';
import {FlexScreenTarea6} from './src/presentation/screens/FlexScreenTarea6';
import {FlexScreenTarea8} from './src/presentation/screens/FlexScreenTarea8';
import {FlexScreenTarea9} from './src/presentation/screens/FlexScreenTarea9';
import {FlexScreenTarea10} from './src/presentation/screens/FlexScreenTarea10';
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
        {/* <FlexDirectionScreen/> */}
        {/* <FlexScreenTarea1/> */}
        {/* <FlexScreenTarea2 /> */}
        <FlexScreenTarea3 />
        {/* <FlexScreenTarea4 /> */}
        {/* <FlexScreenTarea5 /> */}
        {/* <FlexScreenTarea6 /> */}
        {/* <FlexScreenTarea7 /> */}
        {/* <FlexScreenTarea8 /> */}
        {/* <FlexScreenTarea9 /> */}
        {/* <FlexScreenTarea10 /> */}
      </SafeAreaView>
    </PaperProvider>
  );
};
