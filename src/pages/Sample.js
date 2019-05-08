import SideMenu from 'react-native-side-menu';
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Menu from './Menu'

class ContentView extends React.Component {
  render() {
    return (
      <Text>HEllo</Text>
    );
  }
}

export default class Application extends React.Component {

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
