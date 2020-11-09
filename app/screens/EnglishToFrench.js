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
      english_input: null,
      englush_output: null,
      french_input: null,
      french_output: null,
    };
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginHorizontal: 20,
            top: Platform.select({
              ios: "2%",
              android: "12%",
            }),
          }}
        >
          <Icon
            color="black"
            name="arrow-left"
            size={25}
            style={{
              marginLeft: "5%",
              marginBottom: "1.75%",
              marginTop: "1.75%",
            }}
            onPress={() => this.props.navigation.navigate("Start")}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: "5%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginRight: "10%",
                fontSize: RFPercentage(3),
              }}
            >
              English
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Icon
                color="black"
                name="swap-horizontal"
                size={25}
                style={{
                  marginRight: "10%",
                }}
                onPress={() => this.props.navigation.navigate("FreToEng")}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: RFPercentage(3),
              }}
            >
              French
            </Text>
          </View>

          <TouchableOpacity onPress={() => this.refs.english.focus()}>
            <View style={styles.fieldContainer}>
              <Input
                ref="english"
                containerStyle={styles.inputContainer}
                value={this.state.english_input}
                onChangeText={(text) => this.setState({ english_input: text })}
                inputStyle={styles.input}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                multiline
                placeholder="English text"
                placeholderTextColor="#929292"
              />
            </View>
            <View style={styles.fieldContainerBottom} />
          </TouchableOpacity>
          <View pointerEvents={"none"} style={styles.fieldContainer}>
            <Input
              ref="french"
              containerStyle={styles.inputContainer}
              value={this.state.french_output}
              onChangeText={(text) => this.setState({ french_output: text })}
              inputStyle={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              multiline
              placeholder="French output"
              placeholderTextColor="#929292"
            />
          </View>
        </ScrollView>
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

  buttonTitle: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    alignSelf: "center",
    bottom: "51%",
  },

  input: {
    color: "#929292",
    fontSize: 15,
    textAlign: "left",
    paddingLeft: "0%",
  },
  textOutput: {
    color: "#929292",
    width: "100%",
  },

  fieldContainer: {
    flexDirection: "row",
    paddingTop: "10%",
    alignItems: "center",
  },
  fieldContainerBottom: {
    backgroundColor: "#929292",
    height: 1,
    width: "100%",
    marginTop: "0%",
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
