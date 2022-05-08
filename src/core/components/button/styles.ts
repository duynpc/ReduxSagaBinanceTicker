import colors from "@constants/colors";
import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  button: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.blue
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    color: colors.white
  },
});

export default buttonStyles;
