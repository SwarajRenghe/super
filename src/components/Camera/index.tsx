import React from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';

const Camera = () => {
  return (
    <View>
      <Text>Camera</Text>
      <Icon name="md-flash" size={30} />
    </View>
  );
};

export default Camera;
