/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Welcome from "./src/pages/Welcome";
import SignUp from "./src/pages/SignUp";
import LogIn from "./src/pages/LogIn";



const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Signup: {screen: SignUp},
  Login: {screen: LogIn},
});

const App = createAppContainer(MainNavigator);

export default App