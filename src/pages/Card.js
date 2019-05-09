import React, { Component } from 'react';
import { View } from "react-native";
import { Icon, Footer, FooterTab, Button, Text, Container, Header, Content, Form, Item, Picker, Label, Input } from 'native-base';
import QRCode from 'react-native-qrcode';
import LinearGradient from "react-native-linear-gradient";

class HeaderGradient extends Component {
  render() {
    return(
      <LinearGradient
        start={{
          x: 0.31,
          y: 1.1,
        }}
        end={{
          x: 0.69,
          y: -0.1,
        }}
        style={{flex: 1}}
        colors={["rgb(247, 132, 98)", "rgb(139, 27, 140)"]}>
      </LinearGradient>
    )
  }
}

export default class PickerInputExample extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: HeaderGradient,
    headerStyle: {
      shadowOpacity: 0,
      shadowOffset: {
        height: 0
      },
      shadowRadius: 0,
      elevation: 0
    }
  })
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header/>
        <Content contentContainerStyle={{justifyContent: 'center', alignItems: 'center', height: "100%"}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: "50%"
            }}>
            <Text style={{
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'AvenirNext-BoldItalic'
            }}>
            Coming Soon</Text>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button active vertical>
              <Icon active name="card" />
              <Text>Card</Text>
            </Button>
            <Button onPress={() => navigate('Crypto')} vertical>
              <Icon name="logo-bitcoin" />
              <Text>Crypto</Text>
            </Button>
            <Button onPress={() => navigate('RecieveCrypto')} vertical>
              <Icon name="cash" />
              <Text>PesoPay</Text>
            </Button>
            <Button onPress={() => navigate('Account')} vertical>
              <Icon name="person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}