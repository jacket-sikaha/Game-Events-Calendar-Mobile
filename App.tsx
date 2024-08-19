/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './page/about';
import Home from './page/home';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home app',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={About}
          options={{
            title: 'About profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
