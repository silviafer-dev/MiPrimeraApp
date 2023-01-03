import React from 'react';
import {SafeAreaView} from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {DimensionsScreen} from './src/screens/DimensionsScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
  );
};

export default App;
