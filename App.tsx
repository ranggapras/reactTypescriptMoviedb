import React from 'react';
import {SafeAreaView} from 'react-native';
import DetailsMovie from './src/Screens/DetailsMovie/DetailsMovie';
import Home from './src/Screens/Home/Home';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#242A32', height: '100%'}}>
      {/* <Home /> */}
      <DetailsMovie />
    </SafeAreaView>
  );
};

export default App;
