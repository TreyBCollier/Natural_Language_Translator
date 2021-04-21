import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Import necessary screens to be used in navigation
import engFre from "./app/screens/EnglishToFrench";
import freEng from "./app/screens/FrenchToEnglish";
import StartScreen from "./app/screens/StartScreen"
import styles from "./app/styles/homeScreeen"

class App extends React.Component {
  render() {
    return (
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