import { StyleSheet, View, Text } from "react-native";
import TextDisplay from "../components/textDisplay";

// Creates the home screen
export default function Home() {
  console.log("Entered home screen");

  return <TextDisplay>Home Screen</TextDisplay>;
}

// Styles for components on this screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
