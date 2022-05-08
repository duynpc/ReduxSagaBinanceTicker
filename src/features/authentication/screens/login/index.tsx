import strings from "@constants/strings";
import { LoginNavigationProps } from "@features/authentication/props";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

const LoginScreen: React.FC<LoginNavigationProps> = ({}) => (
  <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>{strings.just_a_placeholder}</Text>
      </View>
    </SafeAreaView> 
);

export default LoginScreen;
