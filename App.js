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
import QrCode from "./src/pages/QrCode"
import Test from "./src/pages/Test";
import Sample from "./src/pages/Sample";
import RecieveCryptoNativeBase from "./src/pages/RecieveCryptoNativeBase";
import Card from "./src/pages/Card"
import Crypto from "./src/pages/Crypto"
import Account from "./src/pages/Account"
import RecieveCrypto from "./src/pages/RecieveCrypto"

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Signup: {screen: SignUp},
  Login: {screen: LogIn},
  Qrcode: {screen: QrCode},
  Sample: {screen: Sample},
  RecieveCrypto: {screen: RecieveCryptoNativeBase},
  Test: {screen: Test},
  Card: {screen: Card},
  Account: {screen: Account},
  Crypto: {screen: Crypto},
});

const App = createAppContainer(MainNavigator);

export default App