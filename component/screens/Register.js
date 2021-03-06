import React, { Component, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";
import Firebase from 'firebase'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      email: '',
      password: '',
      error: '',
      isError: false,
    })
  }


  handleSignUp = () => {
    const { email, password } = this.state;

    Firebase.auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(() => {
        const message = "Signup Successfully";
        // this.setState({ isError: true });
        // this.setState({ error: message })
        alert(message);
        setTimeout(() => {
          this.setState({ isError: false, name: '', email: '', password: '' })
        }, 1000)
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        this.setState({ isError: true })
        this.setState({ error });
        setTimeout(() => {
          this.setState({ isError: false, email: '', name: '', password: '' })
        }, 2500)
      })
  }
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../../assets/back.png')}>
        <View style={styles.container}>
          {this.state.isError ? <Text style={{ fontSize: 18, color: "red", backgroundColor: "white", borderColor: "black", borderWidth: .5, textTransform: 'capitalize' }}>
            {this.state.error.message}
          </Text> : <Text></Text>}
          {/* <TextInput
            style={styles.input}
            value={this.state.name}
            placeholder='Your name'
            onChangeText={name => this.setState({ name })}
            placeholderTextColor='#696969'

          /> */}
          <TextInput
            style={styles.input}
            placeholder='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholderTextColor='#696969'

          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholderTextColor='#696969'

          />
          <Text> </Text>
          <Button
            style={{}}
            title='Sign Up'
            // color='pink'
            type='submit'
            onPress={this.handleSignUp}
          />
        </View>
      </ ImageBackground >

    );

  }
}
const styles = StyleSheet.create({

  input: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    margin: 10,
    padding: 16,
    color: 'black',
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Register;