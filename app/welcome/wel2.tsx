import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function wel2() {
  const handlePress = () => {
    console.log("Button Pressed");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.blueText}>Fresh</Text>
        <Text style={styles.blackText}> Vibes,</Text>
        <Text style={styles.blueText}>Easy</Text>
        <Text style={styles.blackText}> Connection</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 67,
    flexDirection: "row", // Ensure that the text is in the same line
    marginTop: 20,
  },
  blueText: {
    color: "#1E90FF",
  },
  blackText: {
    color: "black",
  },
  button: {
    marginTop: 40, // Add space between text and button
    backgroundColor: "#1E90FF", // Button background color
    paddingVertical: 12, // Padding inside button
    paddingHorizontal: 40, // Padding inside button
    borderRadius: 10, // Rounded corners
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // Text color
    fontSize: 18, // Font size for button text
    fontWeight: "bold", // Bold text
  },
});
