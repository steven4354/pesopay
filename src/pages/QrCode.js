import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import LinearGradient from 'react-native-linear-gradient';
import {Alert, Image, Modal, Text, TouchableHighlight, TouchableOpacity} from "react-native"

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

class HelloWorld extends Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
      title: "PesoPay",
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
        <View style={{marginTop: 22}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: 300,
                height: 300,
                backgroundColor: "#ffffff",
                borderRadius: 30,
                borderWidth: 0.5,
                borderColor: '#d6d7da',
                borderTopWidth: null
              }}>
                <View style={{marginTop: 10}}>
                  <View>
                    <View style={{
                      borderRadius: 30,
                      borderWidth: 0.5,
                      borderColor: '#d6d7da',
                      width: 300,
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                      <Text style={{
                        fontSize: 42,
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textAlign: "center",
                        backgroundColor: "transparent",
                      }}>Hello World!</Text>
                    </View>

                    <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text>Close</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Change Crypto</Text>
          </TouchableHighlight>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='purple'
          fgColor='white'/>
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
    alignItems: 'center',
    justifyContent: 'center'
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