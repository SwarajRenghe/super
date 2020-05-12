import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
// eslint-disable-next-line import/no-unresolved
// import Icon from 'react-native-vector-icons/MaterialIcons';
// eslint-disable-next-line import/no-unresolved
import { RNCamera } from 'react-native-camera';
// eslint-disable-next-line import/no-unresolved
import { CameraProps, CameraState } from './types';

class Camera extends React.PureComponent<CameraProps, CameraState> {
  camera: null;

  constructor(props: CameraProps) {
    super(props);
    this.state = {
      type: RNCamera.Constants.Type.back,
      flashMode: RNCamera.Constants.FlashMode.off,
      videoURI: null,
      selected: 'camera',
    };
  }

  handleReverseCamera = () => {
    const { type } = this.state;
    if (type === RNCamera.Constants.Type.back) {
      this.setState({ type: RNCamera.Constants.Type.front });
    } else {
      this.setState({ type: RNCamera.Constants.Type.back });
    }
  };

  handleFlash = () => {
    const { flashMode } = this.state;
    if (flashMode === RNCamera.Constants.FlashMode.off) {
      this.setState({ flashMode: RNCamera.Constants.FlashMode.on });
    } else {
      this.setState({ flashMode: RNCamera.Constants.FlashMode.off });
    }
  };

  takePicture = async () => {
    if (this.camera !== null) {
      const imageOptions = { quality: 0.5, base64: true };
      // const imageData = await this.camera.takePictureAsync(imageOptions);
      await this.camera.takePictureAsync(imageOptions);
      // console.log(imageData.uri);
      // this.setState({ imageURI: imageData.uri})
    }
  };

  takeVideo = async () => {
    if (this.camera !== null) {
      const videoOptions = {
        quality: RNCamera.Constants.VideoQuality['720p'],
        maxDuration: 3,
      };
      const videoData = await this.camera.recordAsync(videoOptions);
      // console.log(videoData.uri);
      this.setState({ videoURI: videoData.uri });
    }
  };

  switchTo = () => {
    const { selected } = this.state;
    if (selected === 'camera') {
      this.setState({ selected: 'video' });
    } else {
      this.setState({ selected: 'camera' });
    }
  };

  onCaptureClick = () => {
    const { selected } = this.state;
    if (selected === 'camera') {
      this.takePicture();
    } else {
      this.takeVideo();
    }
  };

  render() {
    const { type, flashMode, videoURI, selected } = this.state;
    const flashIcon =
      flashMode === RNCamera.Constants.FlashMode.off
        ? 'ios-flash-off'
        : 'ios-flash';
    let camIcon;
    let captureColor;
    if (selected === 'camera') {
      camIcon = 'ios-videocam';
      captureColor = '#fff';
    } else {
      camIcon = 'ios-camera';
      captureColor = '#FF6347';
    }
    if (!videoURI) {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar hidden />
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={{ flex: 1 }}
            captureAudio={false}
            type={type}
            flashMode={flashMode}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.iconContainer}>
                <View style={{ flex: 1 }}>
                  <Ripple
                    rippleColor="#fff"
                    style={[styles.circularRipple]}
                    rippleContainerBorderRadius={30}
                    onPress={this.handleFlash}
                  >
                    <IonIcon name={flashIcon} size={30} color="#fff" />
                  </Ripple>
                </View>
                <View style={{ flex: 1 }}>
                  <Ripple
                    rippleColor="#fff"
                    style={[styles.circularRipple, { alignSelf: 'center' }]}
                    rippleContainerBorderRadius={30}
                  >
                    <IonIcon name="ios-close-circle" size={30} color="#fff" />
                  </Ripple>
                </View>
                <View style={{ flex: 1 }}>
                  <Ripple
                    rippleColor="#fff"
                    style={[styles.circularRipple, { alignSelf: 'flex-end' }]}
                    rippleContainerBorderRadius={30}
                  >
                    <IonIcon name="ios-settings" size={30} color="#fff" />
                  </Ripple>
                </View>
              </View>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Ripple
                style={styles.outerCircle}
                rippleContainerBorderRadius={40}
                onPress={this.onCaptureClick}
              >
                <View
                  style={[
                    styles.innerCircle,
                    { backgroundColor: captureColor },
                  ]}
                />
              </Ripple>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.1)',
                flexDirection: 'row',
              }}
            >
              <View style={{ flex: 1 }}>
                <Ripple
                  style={styles.circularRipple}
                  rippleContainerBorderRadius={30}
                  rippleColor="#fff"
                  onPress={this.switchTo}
                >
                  <IonIcon name={camIcon} size={40} color="#fff" />
                </Ripple>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Ripple
                  style={styles.circularRipple}
                  rippleContainerBorderRadius={30}
                  rippleColor="#fff"
                  onPress={this.handleReverseCamera}
                >
                  <IonIcon name="ios-reverse-camera" size={40} color="#fff" />
                </Ripple>
              </View>
            </View>
          </RNCamera>
        </View>
      );
    }
    return (
      <View>
        <Text>{videoURI}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: { flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.1)' },
  topIconStyle: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  circularRipple: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  innerCircle: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
  },
});
export default Camera;
