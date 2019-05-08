import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Button, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
export default class Welcome extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: HeaderGradient,
    headerStyle: {
      backgroundColor: "transparent",
      color: "white",
      borderBottomWidth: 0,
      shadowOpacity: 0,
        shadowOffset: {
          height: 0
        },
      shadowRadius: 0,
      elevation: 0
    }
  })

  onSignUpPressed = () => {

    const { navigate } = this.props.navigation

    navigate("Signup")
  }

  onLogInPressed = () => {

    const { navigate } = this.props.navigation

    navigate("Login")
  }

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

        <View style={styles.welcomeView}>
          <View style={styles.imageWrapper}>
            <Image
              source={require("./../../assets/images/pay-logo-7.png")}
              style={styles.logoImage}/>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.spacebookText}>PesoPay</Text>
            <Text style={styles.spacebookTextSuperscript}>TM</Text>
          </View>
          <Text style={styles.conquerTheStarsText}>Acepta cualquier crypto {"\n"} y convertir a peso.</Text>
          <View
            style={{
              flex: 1,
            }}/>
          <View style={styles.viewView}>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={this.onSignUpPressed}
            >
              <Image
                source={require("./../../assets/images/icon-sign-up.png")}
                style={styles.signUpButtonImage}/>
              <Text
                style={styles.signUpButtonText}>Regístrate</Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
              }}/>
            <TouchableOpacity
              style={styles.logInButton}
              onPress={this.onLogInPressed}
            >
              <Image
                source={require("./../../assets/images/icon-log-in.png")}
                style={styles.logInButtonImage}/>
              <Text
                style={styles.logInButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
          <Text
						style={styles.supernovaStudioText}>© 2019 PesoPay Global</Text>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: 118,
    height: 117,
    marginTop: 100,
  },
  logoImage: {
    backgroundColor: "transparent",
    // shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 25,
    // shadowOpacity: 1,
    resizeMode: "center",
    width: "100%",
    height: "100%",
    shadowColor: "black",
    shadowOffset: { height: 8},
    shadowOpacity: 0.6,
  },
  welcomeView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    backgroundColor: "black",
    alignSelf: "stretch",
    height: 60,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 85,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  buttons: {
    backgroundColor: "#000000",
    width: 180,
    height: 40,
  },
  signUpButton: {
    backgroundColor: "white",
    borderRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 25,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: 148,
    height: 60,
  },
  signUpButtonText: {
    color: "rgb(217, 103, 110)",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
  },
  signUpButtonImage: {
    resizeMode: "contain",
    marginRight: 10,
  },
  logInButton: {
    backgroundColor: "white",
    borderRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 25,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: 148,
    height: 60,
  },
  logInButtonImage: {
    resizeMode: "contain",
    marginRight: 10,
  },
  logInButtonText: {
    color: "rgb(218, 104, 109)",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
  },
  viewView: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
    height: 60,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 85,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  spacebookText: {
    color: "white",
    fontSize: 42,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginTop: 60,
  },
  spacebookTextSuperscript: {
    color: "white",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginTop: 68,
  },
  conquerTheStarsText: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginTop: 20,
  },
  supernovaStudioText: {
		color: "white",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginBottom: 20,
	},
})
