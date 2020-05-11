import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

// component example screen imports
import ButtonScreen from './examples/ButtonExample';
import RadioButtonScreen from './examples/RadioButtonExample';
import NumPadScreen from './examples/NumPadExample';
import TableScreen from './examples/TableExample';
import PopupScreen from './examples/PopupExample';

// animated example screen imports
import CollapseScreen from './examples/CollapseExample';
import FadeScreen from './examples/FadeExample';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  const componentScreens = [
    'Button',
    'RadioButton',
    'NumPad',
    'Tables',
    'Popup',
  ];
  const animatedScreens = ['Fade', 'Collapse'];
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text style={{ fontSize: 20, margin: 20, fontWeight: 'bold' }}>
          UI components
        </Text>
        {componentScreens.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item)}
            style={styles.navButtonContainer}
            key={item}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
        <Text style={{ fontSize: 20, margin: 20, fontWeight: 'bold' }}>
          Animated components
        </Text>
        {animatedScreens.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item)}
            style={styles.navButtonContainer}
            key={item}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="RadioButton" component={RadioButtonScreen} />
        <Stack.Screen name="NumPad" component={NumPadScreen} />
        <Stack.Screen name="Tables" component={TableScreen} />
        <Stack.Screen name="Popup" component={PopupScreen} />
        <Stack.Screen name="Fade" component={FadeScreen} />
        <Stack.Screen name="Collapse" component={CollapseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navButtonContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(191, 191, 191, 0.5)',
  },
});
export default App;
