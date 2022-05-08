import React from "react";
import { TickerData } from "@entities/tickerData";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { arrow_down, arrow_up } from "src/core/assets";

const TickerRow: React.FC<TickerData> = ({
  symbol,
  priceChangePercent,
  askPrice,
  volume
}) => {
  const priceChangeFloat = parseFloat(priceChangePercent);
  const arrowImage = priceChangeFloat > 0 ? arrow_up : arrow_down;
  const priceChangeStyle = priceChangeFloat > 0 ? styles.priceChangeUp : styles.priceChangeDown;
  return (
    <View style={styles.row}>
      <Text style={styles.symbol}>{symbol}</Text>
      <Text style={styles.askPrice}>{parseFloat(askPrice).toFixed(4)}</Text>
      <Image style={styles.arrow} source={arrowImage}/>
      <Text style={priceChangeStyle}>{Math.abs(priceChangeFloat).toFixed(2)}</Text>
      <Text style={styles.volume}>{parseInt(volume)}</Text>
    </View>
  );
};

export default TickerRow;