import React, { Component } from 'react';
import { View, StyleSheet, Image } from "react-native";
import { Icon, Footer, FooterTab, Button, Text, Container, Header, Content, Form, Item, Picker, Label, Input } from 'native-base';
import QRCode from 'react-native-qrcode';
import LinearGradient from "react-native-linear-gradient";
import email from 'react-native-email';

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
          style={styles.profileView}>
            <Image
              source={require("./../../assets/images/profile-pic.png")}
              style={styles.avatarTempImage}/>
            <Text
              style={styles.drWhatText}>Dr. What</Text>
            <Text
              style={styles.phoneBoothAndroText}>1 Phone Booth, Andromeda</Text>
            <View
              style={{
                flex: 1,
              }}/>
            <Text
              style={styles.travelerDreamerText}>Traveler, dreamer, showman. Occasionally gets into fight, not always survives.</Text>
          </View>
          <View
					style={styles.infoBarView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 44,
								marginLeft: 42,
								marginRight: 41,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View
								style={styles.group5View}>
								<Text
									style={styles.textText}>365</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.photosText}>Photos</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group7View}>
								<Text
									style={styles.textTwoText}>326</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.stalkingText}>Stalking</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.group6View}>
							<Text
								style={styles.kText}>58k</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.stalkersText}>Stalkers</Text>
						</View>
					</View>
				</View>
				<View>
					<Button style={styles.withdrawButton}>
						<Text style={styles.buttonText}>WITHDRAW</Text>
					</Button>
					<Button onPress={this.handleEmail} style={styles.chatButton}>
						<Text style={styles.buttonText}>CHAT</Text>
					</Button>
				</View>
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
            <Button onPress={() => navigate('RecieveCrypto')} vertical>
              <Icon name="cash" />
              <Text>PesoPay</Text>
            </Button>
            <Button vertical active>
              <Icon active name="person" />
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
			subject: 'Chat'
		}).catch(console.error)
	}
}

const styles = StyleSheet.create({
	buttonText: {
		color: "rgb(217, 103, 110)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		padding: 6,
	},
	chatButton: {
	  flex: 1,
		backgroundColor: "white",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowRadius: 15,
		shadowOpacity: 0.7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		height: '100%',
		marginTop: 30,
		marginLeft: 20,
		marginRight: 20,
    marginBottom:10,
	},
	withdrawButton: {
	  flex: 1,
		backgroundColor: "white",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowRadius: 15,
		shadowOpacity: 0.7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		height: '100%',
		marginTop: 30,
		marginLeft: 20,
		marginRight: 20,
    marginBottom:10,
	},
  navigationBarGradient: {
		flex: 1,
	},
	navigationBarItem: {
	},
	headerRightContainer: {
		flexDirection: "row",
		marginRight: 8,
	},
	navigationBarItemTitle: {
		color: "white",
	},
	profileView: {
		backgroundColor: "rgb(244, 242, 244)",
    flex: 1,
    alignItems: "center",
	},
	headerView: {
		backgroundColor: "white",
		height: 297,
		marginTop: 64,
		alignItems: "center",
	},
	avatarTempImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 124,
		height: 124,
		marginTop: 25,
	},
	drWhatText: {
		backgroundColor: "transparent",
		color: "rgb(4, 12, 22)",
		fontSize: 26,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 32,
		marginTop: 11,
	},
	phoneBoothAndroText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "rgb(4, 12, 22)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 5,
	},
	travelerDreamerText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 20,
		backgroundColor: "transparent",
		width: 300,
		marginBottom: 27,
	},
	infoBarView: {
		backgroundColor: "rgb(250, 250, 250)",
		height: 84,
	},
	group5View: {
		backgroundColor: "transparent",
		width: 42,
		height: 44,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(247, 132, 98)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	photosText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "black",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 1,
		marginRight: 1,
	},
	group7View: {
		backgroundColor: "transparent",
		width: 43,
		height: 44,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(139, 27, 140)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	stalkingText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "black",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	group6View: {
		backgroundColor: "transparent",
		width: 43,
		height: 44,
	},
	kText: {
		color: "rgb(217, 103, 110)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 1,
	},
	stalkersText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "black",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	galleryView: {
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 2,
		marginRight: 2,
		marginTop: 20,
		marginBottom: 52,
	},
	latestPhotosText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "black",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "center",
	},
	photosFlatList: {
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	photosFlatListViewWrapper: {
		height: 122,
		marginTop: 13,
	},
})