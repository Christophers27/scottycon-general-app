import React from "react";
import { View, Text, StyleSheet } from "react-native";

// 'children' is a keyword for input in between opening and closing tags
export default function TextDisplay({ children }) {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#3498db",
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  }
});
