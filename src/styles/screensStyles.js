import { StyleSheet } from "react-native";
import Colors from "../theme/colors"; 

const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    fontSize: 20,
  },
});

export { ScreenStyles };
