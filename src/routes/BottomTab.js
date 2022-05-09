import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Geolocation from '../screens/Geolocation';
import QRScan from '../screens/QRScan';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Geolocation" component={Geolocation} />
      <Tab.Screen name="QRScan" component={QRScan} />
    </Tab.Navigator>
  );
}
