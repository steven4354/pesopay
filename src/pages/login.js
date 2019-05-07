import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Welcome from './src/pages/Welcome'

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome}
});


const App = createAppContainer(MainNavigator);
export default App;