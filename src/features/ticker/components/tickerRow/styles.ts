import colors from "@constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    height: 30
  },
  symbol: {
    flex: 2,
  },
  priceChangeDown: {
    flex: 1,
    color: colors.ticker_red
  },
  priceChangeUp: {
    flex: 1,
    color: colors.ticker_green
  },
  askPrice: {
    flex: 2,
  },
  volume: {
    flex: 1,
    textAlign: "right",
    marginRight: 5
  },
  arrow: {
    marginTop: 2,
    width: 15,
    height: 15,
  }
}) 