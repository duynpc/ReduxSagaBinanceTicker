import colors from "@constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center"
  },
  text: {
    textAlign: "center"
  }
});

export default styles;
