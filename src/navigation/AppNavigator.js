import { createDrawerNavigator, createAppContainer } from "react-navigation";

import LandingScreen from '../components/LandingScreen';
import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';
import ContactScreen from '../components/ContactScreen';
import LoginScreen from '../components/LoginScreen';

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
  
  export const AppContainer = createAppContainer(AppNavigator);
  