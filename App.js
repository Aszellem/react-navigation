import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Penz from './screens/Penz';
import Kocka from './screens/Kocka';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Véletlen generátor'>
        <Stack.Screen name='Véletlen generátor' component={Home}/>
        <Stack.Screen name='Pénzfeldobás' component={Penz}/>
        <Stack.Screen name='Kockadobás' component={Kocka}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
