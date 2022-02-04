import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import LandingScreen from './src/components/LandingScreen';
import HomeScreen from './src/components/HomeScreen';
import AboutScreen from './src/components/AboutScreen';
import ContactScreen from './src/components/ContactScreen';
import LoginScreen from './src/components/LoginScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createDrawerNavigator({
  Landing: {
    screen: LandingScreen
  },
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  Contact: {
    screen: ContactScreen
  }
}, 
{
  initialRouteName: "Landing",
  contentOptions: {
    activeTintColor: '#e91e63'
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


