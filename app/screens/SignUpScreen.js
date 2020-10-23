import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

function SignUpScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up Screen</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
  },
});

export default SignUpScreen;
