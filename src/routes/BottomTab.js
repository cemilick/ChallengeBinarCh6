import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Geolocation from '../screens/Geolocation';
import QRScan from '../screens/QRScan';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator initialRouteName={Geolocation}>
      <Tab.Screen name="Geolocation" component={Geolocation} />
      <Tab.Screen name="QRScan" component={QRScan} />
    </Tab.Navigator>
  );
}
