import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { Login } from './Login';

export default class LoginScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Login',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/login-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Login navigation={this.props.navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});