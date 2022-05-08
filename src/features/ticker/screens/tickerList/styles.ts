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
  },
  tickerList: {
    marginHorizontal: 10,
    paddingTop: 5
  },
  tickerHeader: {
    height: 20,
    marginHorizontal: 10,
  }
});

export default styles;
