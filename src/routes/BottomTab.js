import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Geolocation from '../screens/Geolocation';
import QRScan from '../screens/QRScan';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../res/colors';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={Geolocation}
      screenOptions={{
        tabBarActiveTintColor: colors.primaryLight,
        tabBarStyle: {backgroundColor: colors.primaryLight},
        tabBarActiveBackgroundColor: colors.primary,
      }}>
      <Tab.Screen
        name="Geolocation"
        component={Geolocation}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5Icon name="map" size={15} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="QRScan"
        component={QRScan}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5Icon name="qrcode" size={15} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
