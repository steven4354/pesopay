import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import LinearGradient from 'react-native-linear-gradient';
import { AppRegistry, StyleSheet, View, TextInput, Alert, Image, Modal, Text,  TouchableHighlight, TouchableOpacity} from "react-native"
import SideMenu from 'react-native-side-menu';
import Menu from './Menu'
class HelloWorld extends Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
    modalVisible: false,
  };

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
    const menu = <Menu navigator={navigator}/>;
    return (
      <SideMenu menu={menu}>
        <View style={styles.container}>
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
      </SideMenu>
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
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20
  },
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  });

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

module.exports = HelloWorld;