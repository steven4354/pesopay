import React, { Component } from 'react';
import { View } from "react-native";
import { Icon, Footer, FooterTab, Button, Text, Container, Header, Content, Form, Item, Picker, Label, Input } from 'native-base';
import QRCode from 'react-native-qrcode';

export default class PickerInputExample extends Component {
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
    return (
      <Container>
        {/*<Header/>*/}
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
            <Button vertical>
              <Icon name="apps" />
              <Text>Credit Card</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Crypto</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>PesoPay</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}