import strings from "@constants/strings";
import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface TickerHeaderProps {
  style?: StyleProp<ViewStyle>
}

const TickerHeader: React.FC<TickerHeaderProps> = ({
  style
}) => (
  <View style={[styles.row, style]}>
     <Text style={styles.symbol}>{strings.ticker_symbol}</Text>
      <Text style={styles.askPrice}>{strings.ticker_ask_price}</Text>
      <Text style={styles.priceChange}>{strings.ticker_24h_change}</Text>
      <Text style={styles.volume}>{strings.ticker_volume}</Text>
  </View>
)

export default TickerHeader;
