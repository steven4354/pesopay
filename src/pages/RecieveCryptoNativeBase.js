import React, { Component } from 'react';
import {TouchableHighlight, View} from "react-native";
import { Icon, Footer, FooterTab, Button, Text, Container, Header, Content, Form, Item, Picker, Label, Input } from 'native-base';
import QRCode from 'react-native-qrcode';
import LinearGradient from "react-native-linear-gradient";
import email from "react-native-email"

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
          <TouchableHighlight onPress={this.handleEmail}>
            <Text
              style={{color: "black",
                padding: 15,
                fontSize: 18,
                fontStyle: "normal",
                fontWeight: "normal",
                textAlign: "center",
                backgroundColor: "transparent",
                marginTop: 20,}}> We are building out feature to support credit card and debit card payment soon. If you would like us to prioritize and give you a data version early email us by clicking this text. </Text>
          </TouchableHighlight>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Card')} vertical>
              <Icon name="card" />
              <Text>Card</Text>
            </Button>
            <Button onPress={() => navigate('Crypto')} vertical>
              <Icon name="logo-bitcoin" />
              <Text>Crypto</Text>
            </Button>
            <Button vertical active>
              <Icon active name="cash" />
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
  handleEmail = () => {
    const to = ['edison4354@gmail.com'] // string or array of email addresses
    email(to, {
      subject: 'Request for credit card and debit card payment data version'
    }).catch(console.error)
  }
}