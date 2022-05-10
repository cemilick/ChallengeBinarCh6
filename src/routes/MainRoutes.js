import React from 'react';
import Login from '../screens/Login';
import BottomTab from './BottomTab';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
