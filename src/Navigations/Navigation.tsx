import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import WatchList from '../Screens/WatchList/WatchList';
import DetailsMovie from '../Screens/DetailsMovie/DetailsMovie';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Watchlist" component={WatchList} />
      <Stack.Screen name="Detailsmovie" component={DetailsMovie} />
    </Stack.Navigator>
  );
};

export default Navigation;
