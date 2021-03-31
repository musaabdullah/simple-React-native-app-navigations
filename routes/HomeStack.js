import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/Home';
// import ReviewDetails from '../screens/ReviewDetails';
import ReviewDetails from '../Screens/ReviewDetails'
import Login from '../Screens/Login';
import Shope from '../Screens/Shope';
import ProductDetail from '../Screens/ProductDetail';
const screens = {

   Shope: {
        screen: Shope,
        navigationOptions: {
            title : "Online Shope"
        }
   },
   ProductDetail: {
       screen: ProductDetail,
       navigationOptions: {
           title: "Product Detail",
       }
   },
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
        headerStyle: {backgroundColor: "#e44"}
    }
});

export default createAppContainer(HomeStack);