import React from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import { Input } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import * as Speech from 'expo-speech';
import styles from "../styles/translateScreen"

class EnglishToFrench extends React.Component {
  constructor(props) {
    super(props);
    // Setting state variables
    this.state = {
      english_input: null,
      french_output: null,
    };
  }

  render() {

    // Function handles text to speech - usees French result
    const speak = (phrase) => {
      if(phrase != null){
        const thingToSay = phrase;
        Speech.speak(thingToSay, {
          language: "fr"});
      }
    };

    // Function uses  http request to  get translation from VM
    const fetchTranslation = async (page=1) => {
        var input = this.state.english_input;
        try{
          var replaced = input.replace(' ', '%20');
          // Translation is handled by python model on Google VM and Flask to output the result
          // to the external IP provided by the VM
          const searchUrl = `http://34.69.191.129:9090/translateEnglish/`+replaced;
          const response = await fetch(searchUrl);   // fetch page
          const htmlString = await response.text();
          var output = htmlString.slice(0, -5);
          // Encoding removed apostrophes so need to be added back
          var correctOutput = addApostrophe(output);
          this.setState({
            french_output: correctOutput
          })
        }
        // If no translation generated, prompt user to ensure language is correct
        catch(err){
          Alert.alert("Please enter English text")
        }
    }

    // Adding missing apostrophes to words
    const addApostrophe = (string) => {
      var output = ""
      var words = string.split(" ");
      for(let i in words){
        if(words[i] == "."){
          words[i] = ""
        }
        if((words[i].length == 1) && (words[i] != "y" && words[i] != ".")){
          words[i] = words[i] + "'";
        }
      }
      for(let i in words){
        if(words[i].includes("'")){
          output = output + words[i]
        }
        else{
          output = output + words[i] + " "
        }
      }
      return output
    }

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
              {/* Icon to navigate/switch to 'FrenchToEnglish' translating */}
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
          {/* Text field for entering English text to be translated */}
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
            
          </TouchableOpacity>

          {/* Calling 'fetchTranslation' to translate the input text */}
          <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => fetchTranslation()}
              style={[styles.buttonContainer, styles.translateButton]}
          >
              <Text style={styles.appButtonText}>Translate</Text>
          </TouchableOpacity>

          {/* Text field for translation output */}
          <View style={{flexDirection: "row"}}>
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
            
            {/* Icon to activate 'Text-to-Speech' */}
            <TouchableOpacity activeOpacity={0.8}  style ={styles.microphone}>
                <Icon
                  color="#929292"
                  name="microphone"
                  size={25}
                  style={{
                    marginRight: "10%",
                  }}
                  onPress={() => speak(this.state.french_output)}
                />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default EnglishToFrench;