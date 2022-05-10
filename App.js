import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useEffect} from 'react';

import crashlytics from '@react-native-firebase/crashlytics';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from './src/routes/MainRoutes';

const onSignIn = async user => {
  crashlytics().log('User Signed In.');
  await Promise.all([
    crashlytics().setUserId(user.id),
    crashlytics().setAttribute('credits', String(user.credits)),
    crashlytics().setAttrbite({
      role: 'admin',
      followers: 13,
      email: user.email,
      username: user.username,
    }),
  ]);
};

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}

// export default function App() {
//   useEffect(() => {
//     crashlytics().log('App Mounted');
//   }, []);
//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => {
//           onSignIn({
//             uid: 'qwertyuiop',
//             username: 'cemilick cemill',
//             email: 'cemilick@cemil.com',
//             credits: 42,
//           });
//         }}>
//         <Text>Click to Test Sign In</Text>
//       </TouchableOpacity>
//       <Button
//         title="Test Crash"
//         onPress={() => {
//           console.log('app should crash');
//           crashlytics().crash();
//         }}
//       />
//     </View>
//   );
// }
