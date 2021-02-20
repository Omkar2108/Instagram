import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from "./component/Splash";
import Login from "./component/Login";
import Register from "./component/Register";
// import setup from "./setup";

const AppNavigator = createStackNavigator({
  /*SplashScreen: {
     screen: SplashScreen
   },*/
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Profile: {
    screen: Splash
  }
});

export default createAppContainer(AppNavigator);


