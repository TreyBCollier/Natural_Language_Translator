import React from "react";
import {
    StyleSheet
  } from "react-native";
  import colours from "../config/colours";
  import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


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
      paddingVertical: 5,
      paddingHorizontal: 0,
      width: "100%",
      height: "12%",
      marginBottom: "0%",
      marginTop: "0%",
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: colours.email,
    },
    translateButton: {
      backgroundColor: "transparent",
      borderWidth: 1.5,
      borderColor: "#929292",
    },
    appButtonText: {
      fontSize: RFPercentage(2),
      color: "#929292",
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
      width: "90%"
    },
    fieldContainerBottom: {
      backgroundColor: "#929292",
      height: 1,
      width: "100%",
      marginTop: "0%",
      alignSelf: "center",
    },
    microphone: {
        paddingTop: "10%",
        color: "#929292",
    }
  });

  export default styles;