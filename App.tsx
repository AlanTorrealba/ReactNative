import { View, Text, SafeAreaView } from "react-native"
import { HellowWorldScreen } from './src/presentation/screens/HellowWorldScreen';
import { CounterScreen } from "./src/presentation/screens/CounterScreen";



export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <HellowWorldScreen name= 'Alan Noel Torrealba Tapia'/> */}
      <CounterScreen/>
    </SafeAreaView>
  )
}

