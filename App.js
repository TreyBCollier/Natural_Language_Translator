import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import SignUpScreen from "./app/screens/SignUpScreen";
import engFre from "./app/screens/EnglishToFrench";
import freEng from "./app/screens/FrenchToEnglish";
import colours from "./app/config/colours";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class StartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>{styles.backgroundImage}resizeMode="cover"source={require("./app/assets/paris.jpeg")}SafeAreaView style={[styles.imgContainer]}>       style={styles.logo}    source={require("./app/assets/logo_white.png")}  ></Image>
       activeOpacity={0.8}    onPress={() => this.props.navigation.navigate("EngToFre")}    style={[styles.buttonContainer, styles.faceboookBtn]}       <Text style={styles.appButtonText}>Log In With Facebook</Text>  </TouchableOpacity>
       activeOpacity={0.8}    style={[styles.buttonContainer, styles.emailBtn]}       <Text style={styles.appButtonText}>Log In With Email</Text>  </TouchableOpacity>
       activeOpacity={0.8}    onPress={() => this.props.navigation.navigate("SignUp")}    style={[styles.buttonContainer, styles.signupBtn]}       <Text style={styles.appButtonText}>Sign Up</Text>  </TouchableOpacity></SafeAreaView>ImageBackground>style="auto" />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Start: {
    screen: StartScreen,
    navigationOptions false,
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions false,
    },
  },
  EngToFre: {
    screen: engFre,
    navigationOptions false,
    },
  },
  FreToEng: {
    screen: freEng,
    navigationOptions false,
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    bottom: 0,
    alignContent: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: "30%",
  },

  text: {
    color: "white",
    fontSize: RFPercentage(5),
    fontWeight: "500",
    textAlign: "center",
  },

  title: {
    marginBottom: "10%",
  },

  logo: {
    width: "90%",
    height: "30%",
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: "-2.5%",
  },

  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    marginTop: 15,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 5,
    width: "90%",
    height: "5%",
    alignSelf: "center",
    justifyContent: "center",
  },

  faceboookBtn: {
    backgroundColor: colours.facebook,
  },
  emailBtn: {
    backgroundColor: colours.email,
  },

  signupBtn: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "white",
  },

  appButtonText: {
    fontSize: RFPercentage(2),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default createAppContainer(AppNavigator);
