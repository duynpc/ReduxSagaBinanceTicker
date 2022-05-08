import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    marginVertical: 5,
    flexDirection: "row",
  },
  symbol: {
    flex: 2,
    fontWeight: "bold"
  },
  priceChange: {
    flex: 1,
    fontWeight: "bold"
  },
  askPrice: {
    flex: 2,
    fontWeight: "bold"
  },
  volume: {
    flex: 1,
    textAlign: "right",
    fontWeight: "bold",
    marginRight: 5
  },
}) 