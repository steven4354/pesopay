import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import LinearGradient from 'react-native-linear-gradient';
import { AppRegistry, StyleSheet, View, TextInput, Alert, Image, Modal, Text,  TouchableHighlight, TouchableOpacity, YellowBox} from "react-native"
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";


class HelloWorld extends Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
    modalVisible: false,
  };

  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]);
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
        <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
          <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

            <MenuTrigger  >
              <Text style={styles.headerText}>DropDown Menu</Text>
            </MenuTrigger  >

            <MenuOptions>
              <MenuOption value={"Login"}>
                <Text style={styles.menuContent}>Login</Text>
              </MenuOption>
              <MenuOption value={"Register"}>
                <Text style={styles.menuContent}>Register</Text>
              </MenuOption>
              <MenuOption value={"Download"}>
                <Text style={styles.menuContent}>Download</Text>
              </MenuOption>
              <MenuOption value={"Logout"}>
                <Text style={styles.menuContent}>Logout</Text>
              </MenuOption>
              <MenuOption value={3} disabled={true}>
                <Text style={styles.menuContent}>Disabled Menu</Text>
              </MenuOption>
            </MenuOptions>

          </Menu>
        </MenuProvider>
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
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

module.exports = HelloWorld;