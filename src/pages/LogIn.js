import React, {Component} from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native"
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
        colors={["rgb(45, 45, 45)", "rgb(90, 184, 138)"]}>
      </LinearGradient>
    )
  }
}

export default class LogIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: HeaderGradient,
    headerStyle: {
      color: "white",
      backgroundColor: "rgb(139, 27, 140)",
      borderBottomWidth: 0,
      shadowOpacity: 0,
        shadowOffset: {
          height: 0
        },
      shadowRadius: 0,
      elevation: 0
    }
  })

  onLoginPressed = () => {

    const { navigate } = this.props.navigation

    navigate("Map")
  }
  render() {
    return(
      <LinearGradient style={{flex: 1}} colors={["rgb(45, 45, 45)", "rgb(90, 184, 138)"]}>
        <View
          style={styles.loginView}>
          <Text
            style={styles.logInText}>GoSearch</Text>
          {/* <Text
            style={styles.welcomeBackText}>Bienvenido.{"\n"}Introduce tus detalles abajo.</Text> */}
          <View
            style={styles.loginFieldsView}>
            <TextInput
              autoCorrect={false}
              placeholder="Username"
              style={styles.yourNicknameTextInput}/>
            <View
              style={styles.separatorView}/>
            <TextInput
              autoCorrect={false}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.yourPasswordTextInput}/>
          </View>
          <View
            style={{
              flex: 1,
            }}/>
          <TouchableOpacity
            onPress={this.onLoginPressed}
            style={styles.loginButton}>
            <Text
              style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onForgotYourPasswordPressed}
            style={styles.forgotYourPasswordButton}>
            <Text
              style={styles.forgotYourPasswordButtonText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBarItemIcon: {
    tintColor: "white",
  },
  headerLeftContainer: {
    flexDirection: "row",
    marginLeft: 8,
  },
  navigationBarItem: {
  },
  loginView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  loginViewLinearGradient: {
    flex: 1,
  },
  logInText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 72,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 114,
  },
  welcomeBackText: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginTop: 20,
  },
  loginFieldsView: {
    backgroundColor: "white",
    borderRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 25,
    shadowOpacity: 1,
    alignSelf: "stretch",
    height: 101,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 302,
  },
  yourNicknameTextInput: {
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    padding: 0,
    height: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 14,
  },
  separatorView: {
    backgroundColor: "black",
    opacity: 0.1,
    height: 1,
    marginTop: 16,
  },
  yourPasswordTextInput: {
    backgroundColor: "transparent",
    padding: 0,
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 14,
  },
  loginButton: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 25,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    alignSelf: "stretch",
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 11,
  },
  loginButtonText: {
    color: "rgb(90, 184, 138)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButtonImage: {
    resizeMode: "contain",
    marginRight: 10,
  },
  forgotYourPasswordButtonText: {
    color: "white",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
  },
  forgotYourPasswordButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    // width: 150,
    height: 18,
    marginBottom: 19,
  },
  forgotYourPasswordButtonImage: {
    resizeMode: "contain",
    marginRight: 10,
  },
})
