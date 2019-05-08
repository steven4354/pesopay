import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import LinearGradient from 'react-native-linear-gradient';
import {Alert, Image, Modal, Text, TouchableHighlight, TouchableOpacity} from "react-native"

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Picker
} from 'react-native';

class HelloWorld extends Component {
  // todo: change the text to not be bolded & revmove the gradiengt
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      headerTransparent: true,
      headerBackground: <LinearGradient
        start={{
          x: -0.01,
          y: 0.51,
        }}
        end={{
          x: 1.01,
          y: 0.49,
        }}
        locations={[0, 1]}
        colors={["rgb(247, 132, 98)", "rgb(139, 27, 140)"]}
        style={styles.navigationBarGradient}/>,
      title: "Receive Crypto",
      headerTintColor: "white",
      headerLeft: null,
      headerRight: null,
      headerStyle: {

      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={styles.text}>
            Change Crypto:
          </Text>
        </View>

        <Picker
          selectedValue={"java"}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => {

          }}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <View>
          <Text
            style={styles.text}>
            Select Amount:
          </Text>
        </View>

        <TextInput>
        </TextInput>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  navigationBarGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: "15%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    backgroundColor: "transparent",
    color: "rgb(33, 44, 58)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    letterSpacing: 0.5,
    marginTop: 7,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

module.exports = HelloWorld;