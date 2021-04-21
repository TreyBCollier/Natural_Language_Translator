import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Import necessary screens to be used in navigation
import engFre from "./app/screens/EnglishToFrench";
import freEng from "./app/screens/FrenchToEnglish";
import StartScreen from "./app/screens/StartScreen"

class App extends React.Component {
  render() {
    return (
      // Using the  'StartScreen' component as the default 'Home' screen for the app
      <StartScreen/>
    );
  }
}

// AppNavigator handles navigation between screens
const AppNavigator = createStackNavigator({
  Start: {
    screen: StartScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  EngToFre: {
    screen: engFre,
    navigationOptions: {
      headerShown: false,
    },
  },
  FreToEng: {
    screen: freEng,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigator);