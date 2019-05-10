import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import email from 'react-native-email'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Send Mail" onPress={this.handleEmail} />
      </View>
    )
  }

  handleEmail = () => {
    const to = ['edison4354@gmail.com'] // string or array of email addresses
    email(to, {
      subject: 'Show how to use',
      body: 'Some body right here'
    }).catch(console.error)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})