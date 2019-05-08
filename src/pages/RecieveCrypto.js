import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import LinearGradient from 'react-native-linear-gradient';
import {Alert, Image, Modal, TouchableHighlight, TouchableOpacity} from "react-native"

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Picker,
  // Button
} from 'react-native';

import { Container, Header, Button, Content, ActionSheet, Text } from "native-base";
var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class HelloWorld extends Component {
  // todo: change the text to not be bolded & revmove the gradiengt
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      // headerTransparent: true,
      // headerBackground: <LinearGradient
      //   start={{
      //     x: -0.01,
      //     y: 0.51,
      //   }}
      //   end={{
      //     x: 1.01,
      //     y: 0.49,
      //   }}
      //   locations={[0, 1]}
      //   colors={["rgb(247, 132, 98)", "rgb(139, 27, 140)"]}
      //   style={styles.navigationBarGradient}/>,
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
      <Container>
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

          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}>
            {/* <TextInput
              style={{
                backgroundColor: "gray",
              }}
              value={"1"}>
            </TextInput> */}
            {/*<RkTextInput placeholder='Login'/>*/}
            <Content padder>
              <Button
                onPress={() =>
                  ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: "Testing ActionSheet"
                    },
                    buttonIndex => {
                      this.setState({ clicked: BUTTONS[buttonIndex] });
                    }
                  )}
              >
                <Text>Actionsheet</Text>
              </Button>
            </Content>

            <Text>
              COP
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Button
              title="Generate deposit address"
            />
          </View>
        </View>
      </Container>
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