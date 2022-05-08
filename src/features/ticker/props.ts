import RootStackParamList from "@navigation/stackParamList";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface TickerNavigationProps {
  route: RouteProp<RootStackParamList, "TICKER_SCREEN">;
  navigation:
    NativeStackNavigationProp<RootStackParamList, "TICKER_SCREEN">;
}