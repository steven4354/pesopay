import SideMenu from 'react-native-side-menu';
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Menu from './Menu'
import LinearGradient from "react-native-linear-gradient";

class ContentView extends React.Component {
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
      <View style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white"
      }}>
        <Text>HEllo</Text>
      </View>
    );
  }
}

export default class Application extends React.Component {
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
  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={true}
      >
        <ContentView/>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  navigationBarGradient: {
    flex: 1,
  },
})