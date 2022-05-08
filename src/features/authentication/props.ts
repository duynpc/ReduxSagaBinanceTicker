import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GUEST_SCREEN, LOGIN_SCREEN } from "@navigation/routeNames";
import RootStackParamList from "@navigation/stackParamList";

export interface GuestNavigationProps {
  route: RouteProp<RootStackParamList, "GUEST_SCREEN">;
  navigation:
    NativeStackNavigationProp<RootStackParamList, "GUEST_SCREEN">;
}

export interface LoginNavigationProps {
  route: RouteProp<RootStackParamList, "LOGIN_SCREEN">;
  navigation:
    NativeStackNavigationProp<RootStackParamList, "LOGIN_SCREEN">;
}