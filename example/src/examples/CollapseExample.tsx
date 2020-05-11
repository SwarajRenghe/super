import React, { useState } from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Collapse } from 'supergroww';

const FadeExample = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ marginTop: 40, flex: 1 }}>
      <Text style={{ padding: 20 }} onPress={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </Text>
      <Collapse />
    </View>
  );
};

export default FadeExample;
