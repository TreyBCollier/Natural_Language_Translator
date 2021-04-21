import React from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    StatusBar
} from "react-native";
import styles from "../styles/homeScreeen"

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    // Setting state variables
    this.state = {
    };
  }

  render() {

    return (
        <View style={styles.container}>
        {/* Setting background image for home screen */}
        <ImageBackground
          style={styles.backgroundImage}
          resizeMode="cover"
          source={require("../assets/paris.jpeg")}
        >
          <SafeAreaView style={[styles.imgContainer]}>
            {/* Adding logo to homescreen */}
            <Image
              style={styles.logo}
              source={require("../assets/logo_white.png")}
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

          </SafeAreaView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default StartScreen;