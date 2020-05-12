import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Camera } from 'supergroww';

const CameraExample = () => {
  return (
    <View style={{ flex: 1 }}>
      <Camera />
    </View>
  );
};

export default CameraExample;
