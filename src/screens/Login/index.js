import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../res/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Comfortaa from '../../components/Comfortaa';
import {moderateScale as ms} from 'react-native-size-matters';
import Logo from '../../assets/images/logo.png';
LogBox.ignoreAllLogs();

export default function Index({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={{backgroundColor: colors.primaryDark}}>
      <View style={styles.allContainer}>
        <View style={styles.circleTopContainer}>
          <View style={styles.circle} />
        </View>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
          <Fumi
            style={styles.form}
            label={'Email'}
            iconClass={FontAwesome5}
            iconName={'envelope'}
            iconColor={colors.primary}
            iconSize={ms(20)}
            iconWidth={ms(40)}
            inputPadding={ms(16)}
            onChangeText={text => setEmail(text)}
          />

          <Fumi
            style={styles.form}
            label={'Password'}
            iconClass={FontAwesome5}
            iconName={'lock'}
            iconColor={colors.primary}
            iconSize={ms(20)}
            iconWidth={ms(40)}
            inputPadding={ms(16)}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BottomTab')}>
            <Comfortaa>Login</Comfortaa>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Comfortaa>Don't have an Account?</Comfortaa>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Comfortaa type="Bold" decoration="underline">
              Create new one!
            </Comfortaa>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.circleBottomContainer}>
        <View style={styles.circle} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  allContainer: {
    width: wp(100),
    height: hp(100),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginBottom: ms(8),
    borderRadius: ms(5),
    width: wp(80),
  },
  formContainer: {
    backgroundColor: colors.primary,
    width: wp(90),
    padding: wp(5),
    borderRadius: ms(10),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: ms(150),
    height: ms(120),
  },
  logoContainer: {
    borderRadius: ms(200),
    padding: ms(20),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: ms(10),
  },
  button: {
    backgroundColor: colors.primaryDark,
    padding: ms(10),
    alignItems: 'center',
    width: wp(50),
    borderRadius: ms(5),
    marginTop: ms(8),
  },
  footer: {
    alignItems: 'center',
    marginTop: ms(25),
  },
  circle: {
    backgroundColor: colors.primary,
    width: ms(250),
    height: ms(250),
    borderRadius: ms(250),
  },
  circleTopContainer: {
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: hp(15),
    width: wp(100),
    top: 0,
    left: ms(-80),
  },
  circleBottomContainer: {
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: hp(15),
    width: wp(100),
    bottom: 0,
    right: ms(-80),
  },
});
