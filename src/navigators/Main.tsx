import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '../screens/HomeMain';
import Home from '../screens/Home/Home';
import Profile from '../screens/Proifle';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
