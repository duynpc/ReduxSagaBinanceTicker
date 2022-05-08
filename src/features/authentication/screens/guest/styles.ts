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
    justifyContent: "center",
    marginHorizontal: 20,
  },
  button: {
    height: 50,
    marginBottom: 20
  }
});

export default styles;
