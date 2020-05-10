import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Steps } from 'supergroww';

const StepsExample = () => {
  return (
    <View>
      <Steps direction="horizontal" />
      <Steps direction="vertical" />
    </View>
  );
};

export default StepsExample;
