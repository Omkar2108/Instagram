import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from "./component/screens/Splash";
import Login from "./component/screens/Login";
import Register from "./component/screens/Register";
import ForgotPassword from './component/screens/forgotPass';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  ForgotPassword: {
    screen: ForgotPassword
  },
  Splash: {
    screen: Splash
  }
});

export default createAppContainer(AppNavigator);


