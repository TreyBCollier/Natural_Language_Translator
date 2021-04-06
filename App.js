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

import SignUpScreen from "./app/screens/SignUpScreen";
import engFre from "./app/screens/EnglishToFrench";
import freEng from "./app/screens/FrenchToEnglish";
import styles from "./app/styles/homeScreeen"

class StartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Setting background image for home screen */}
        <ImageBackground
          style={styles.backgroundImage}
          resizeMode="cover"
          source={require("./app/assets/paris.jpeg")}
        >
          <SafeAreaView style={[styles.imgContainer]}>
            {/* Adding logo to homescreen */}
            <Image
              style={styles.logo}
              source={require("./app/assets/logo_white.png")}
            ></Image>

            {/* Button to navigate to 'English to French' translating */}
            
            <View style={{width: "100%", height: "100%", position: "absolute", top: "80%"}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("EngToFre")}
              style={[styles.buttonContainer, styles.signupBtn]}
            >
              <Text style={styles.appButtonText}>Translate English to French</Text>
            </TouchableOpacity>

            {/* Button to navigate to 'French to English' translating */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("FreToEng")}
              style={[styles.buttonContainer, styles.signupBtn]}
            >
              <Text style={styles.appButtonText}>Translate French to English</Text>
            </TouchableOpacity>
            </View>

            {/*  Button to navigate to 'Signup' - Future implementation

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("SignUp")}
              style={[styles.buttonContainer, styles.signupBtn]}
            >
              <Text style={styles.appButtonText}>Sign Up</Text>
            </TouchableOpacity>
            */}

          </SafeAreaView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
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
  SignUp: {
    screen: SignUpScreen,
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