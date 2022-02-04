import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class LandingScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Landing',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/home-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to My App</Text>
        <Button
          title="Get Start"
          onPress={() => this.props.navigation.navigate('Login')}
        />
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