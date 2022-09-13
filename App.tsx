import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Navigation from './src/Navigations/Navigation';
import store from './src/Store/store';
import {Provider} from 'react-redux';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#242A32',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
