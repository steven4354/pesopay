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

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      showQr: false
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header/>
        <Content>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}>
            {
              !this.state.showQr ?
                <Text style={{marginTop: 100, marginLeft: 17, marginRight: 15, fontSize: 20, fontWeight: "bold"}}>Enter Transaction Details:</Text>
                :
                <Text style={{marginTop: 50, marginLeft: 17, marginRight: 15, fontSize: 20, fontWeight: "bold"}}>Edit Transaction Details</Text>
            }
          </View>
          <Form style={{marginTop: 25, marginLeft: 5, marginRight: 15}}>
            <Item inlineLabel>
              <Label style={{width: "50%"}}>Select Crytocurrency</Label>
              <Picker
                mode="dropdown"
                // iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
            <Item inlineLabel>
              <Label style={{width: "50%"}}>Select Amount (COP)</Label>
              <Input placeholder='Regular Textbox' />
            </Item>
            {/*<Item picker>*/}
            {/*  */}
            {/*</Item>*/}
          </Form>
          <View
            style={{
              marginTop: 45,
              marginLeft: 25,
              marginRight: 25,
              alignItems: "center",
              justifyContent: "center",
            }}>
            {
              this.state.showQr ?
                <QRCode
                  value={"lsjdflksdjf"}
                  size={200}
                  // bgColor='purple'
                  fgColor='white'/>
                :
                <Button
                  block
                  success
                  onPress={() => {
                    this.setState({
                      showQr: true
                    })
                  }}>
                  <Text>Start Transaction</Text>
                </Button>
            }
          </View>
          {/*<Text>*/}
          {/*  Awaiting...*/}
          {/*</Text>*/}
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