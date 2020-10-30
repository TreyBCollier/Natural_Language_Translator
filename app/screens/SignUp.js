import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Button, Card, Input, CheckBox, Overlay } from "react-native-elements";
import { BarPasswordStrengthDisplay } from "react-native-password-strength-meter";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import colours from "../config/colours";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

  }


  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        

          <Text style={styles.titleText}>Create an Account</Text>

       
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    paddingTop: 20,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 1,

    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 5,
    width: "90%",
    height: "5%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: colours.email,
  },
  appButtonText: {
    fontSize: RFPercentage(2),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  boldText: {
    color: "grey",
    fontSize: 18,
    paddingLeft: "7%",
    paddingTop: "6%",
    paddingBottom: "5%",
  },
  constraintsText: {
    color: "grey",
    fontSize: 15,
    textAlign: "center",
    paddingLeft: "2%",
  },
  text: {
    color: "grey",
    fontSize: 15,
    width: "80%",
  },
  errorText: {
    color: "red",
    fontSize: 15,
    width: "80%",
  },
  text2: {
    color: colours.email,
    fontSize: 15,
    textDecorationLine: "underline",
  },
  text3: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  text4: {
    color: "grey",
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 30,
    textAlign: "justify",
  },
  buttonTitle: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    alignSelf: "center",
    bottom: "51%",
  },
  inputContainer: {
    position: "absolute",
    height: 30,
    paddingTop: "6%",
    left: 20,
  },
  input: {
    color: colours.email,
    fontSize: 15,
    textAlign: "center",
    paddingLeft: "6%",
  },
  inputHeader: {
    color: "#929292",
    fontSize: 18,
    textAlign: "left",
    left: 25,
    top: "3%",
    width: "85%",
  },
  fieldContainer: {
    flexDirection: "row",
    paddingTop: "5%",
    alignItems: "center",
  },
  fieldContainerBottom: {
    backgroundColor: "#e3e3e3",
    height: 1,
    width: "90%",
    marginTop: "15%",
    alignSelf: "center",
  },
});

const barlevels = [
  {
    label: "Pathetically weak",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
  {
    label: "Extremely weak",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
  {
    label: "Very weak",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
  {
    label: "Weak",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
  {
    label: "So-so",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
  {
    label: "Average",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
  {
    label: "Fair",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
  {
    label: "Strong",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
  {
    label: "Very strong",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
  {
    label: "Unbelievably strong",
    labelColor: "#01a7a6",
    activeBarColor: "#01a7a6",
  },
];

export default SignUpScreen;
