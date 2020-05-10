import React from 'react';
import { View, Text } from 'react-native';
import { StepsProps } from './types';

const Steps = (props: StepsProps) => {
  const { direction } = props;
  return (
    <View
      style={{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }}
    >
      <Text>Steps - 1</Text>
      <Text>Steps - 2</Text>
      <Text>Steps - 3</Text>
      <Text>Steps - 4</Text>
    </View>
  );
};

export default Steps;
