import React from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "./app/screens/SignUpScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App({ navigation }) {
  return <WelcomeScreen />;
}
