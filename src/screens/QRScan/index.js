import {View, Text} from 'react-native';
import React from 'react';
import {CameraScreen, CameraType} from 'react-native-camera-kit';

const onReadCode = data => {
  alert(data.nativeEvent.codeStringValue);
};

export default function Index() {
  return (
    <CameraScreen
      cameraType={CameraType.Back}
      scanBarcode={true}
      onReadCode={event => onReadCode(event)}
      showFrame={true}
      laserColor="red"
      frameColor="white"
    />
  );
}
