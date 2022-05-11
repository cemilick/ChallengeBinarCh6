import {View, StyleSheet, PermissionsAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Index() {
  const [initialPosition, setinitialPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const getMyLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {longitude, latitude} = position.coords;

        setinitialPosition({
          ...initialPosition,
          longitude: longitude,
          latitude: latitude,
        });
      },
      error => alert(error.message),
    );
  };

  useEffect(async () => {
    try {
      const permissions = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (permissions === PermissionsAndroid.RESULTS.GRANTED) getMyLocation();
      else alert('Please give this app access location permissions');
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        followsUserLocation={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={initialPosition}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: hp(100),
    width: wp(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
