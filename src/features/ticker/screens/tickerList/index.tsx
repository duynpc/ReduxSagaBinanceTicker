import Button from "@components/button";
import Spacer from "@components/spacer";
import TickerHeader from "@features/ticker/components/tickerHeader";
import TickerRow from "@features/ticker/components/tickerRow";
import React, { useEffect } from "react";
import styles from "./styles";
import { FlatList, SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { tickerRequest, tickerUpdateRateChange } from "../../action";
import { TickerNavigationProps } from "../../props";
import { selectAllTicker, selectTickerUpdateDelay } from "../../selector";
import { tickerUpdateRateOptions } from "@constants/tickerUpdateTime";

const TickerScreen: React.FC<TickerNavigationProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const tickerData = useSelector(selectAllTicker);
  const tickerUpdateDelay = useSelector(selectTickerUpdateDelay);
  
  let timer: NodeJS.Timeout | undefined; 
  
  useEffect(() => {    
    dispatch(tickerRequest());
  }, []);

  useEffect(() => {    
    timer = setInterval(() => {
      dispatch(tickerRequest());
    }, tickerUpdateDelay);

    return () => {      
      if (timer) {
        clearInterval(timer);
      }      
    }
  }, [tickerUpdateDelay])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button 
          style={{width: 100}}
          onPress={() => onPressUpdateRate()}
          textButton={`Update: ${tickerUpdateDelay / 1000}s`} 
        />
      ),
    });
  }, [navigation, tickerUpdateDelay]);


  const onPressUpdateRate = () => {
    let index = tickerUpdateRateOptions.findIndex(((rate) => rate === tickerUpdateDelay));
    index++;
    if (index >= tickerUpdateRateOptions.length) {
      index = 0;
    }    
    dispatch(tickerUpdateRateChange(tickerUpdateRateOptions[index]));
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TickerHeader style={styles.tickerHeader} />
        <Spacer />
        {tickerData && 
          <FlatList 
            style={styles.tickerList}
            data={tickerData}
            keyExtractor={(ticker, _index) => ticker.symbol}
            renderItem={(data) => TickerRow(data.item)}
          /> 
        }
      </View>
    </SafeAreaView> 
  );
};

export default TickerScreen;
