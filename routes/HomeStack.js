import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/Home';
// import ReviewDetails from '../screens/ReviewDetails';
import ReviewDetails from '../Screens/ReviewDetails'
import Login from '../Screens/Login';

const screens = {

   Login: {
       screen: Login,
       navigationOptions: {
           title: "Login",
       }
   },
   Home: { 
       screen: Home, 
       navigationOptions: {
           title: "Home",
         
       }
   },
   ReviewDetails: {
       screen: ReviewDetails,
       navigationOptions: {
           title: "Review Details",
          
       }
   }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: "gray"}
    }
});

export default createAppContainer(HomeStack);