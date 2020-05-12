import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Ripple from 'react-native-material-ripple';
// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
// eslint-disable-next-line import/no-unresolved
import { RNCamera } from 'react-native-camera';

const Camera = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <RNCamera style={{ flex: 1 }} captureAudio={false}>
        <View style={{ flex: 1 }}>
          <View style={styles.iconContainer}>
            <Ripple
              rippleColor="#fff"
              style={styles.topIconStyle}
              rippleContainerBorderRadius={20}
            >
              <IonIcon name="ios-flash" size={30} color="#fff" />
            </Ripple>
            <Ripple
              rippleColor="#fff"
              style={styles.topIconStyle}
              rippleContainerBorderRadius={20}
            >
              <IonIcon name="ios-close-circle" size={30} color="#fff" />
            </Ripple>
            <Ripple
              rippleColor="#fff"
              style={styles.topIconStyle}
              rippleContainerBorderRadius={20}
            >
              <IonIcon name="ios-settings" size={30} color="#fff" />
            </Ripple>
          </View>
        </View>

        <Ripple style={{ alignItems: 'center', padding: 10 }}>
          <Icon name="camera" size={40} color="#fff" />
        </Ripple>
        <Ripple style={{ alignItems: 'flex-end', padding: 10 }}>
          <IonIcon name="ios-reverse-camera" size={40} color="#fff" />
        </Ripple>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: { flexDirection: 'row' },
  topIconStyle: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});
export default Camera;
