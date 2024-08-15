/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './page/Home';
import About from './page/About';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
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
