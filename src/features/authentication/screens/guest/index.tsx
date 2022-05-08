import React, { useCallback } from "react";

import Button from "@components/button";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import strings from "@constants/strings";
import { GuestNavigationProps } from "../../props";
import { LOGIN_SCREEN, TICKER_SCREEN } from "@navigation/routeNames";


const GuestScreen: React.FC<GuestNavigationProps> = ({ navigation }) => {
  const onGuestPress = useCallback(() => {
    navigation.push(TICKER_SCREEN);
  }, [navigation]);

  const onLoginPress = useCallback(() => {
    navigation.push(LOGIN_SCREEN);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Button
          style={styles.button}
          textButton={strings.to_login}
          onPress={onLoginPress}
        />
        <Button
          style={styles.button}
          textButton={strings.procced_as_guest}
          onPress={onGuestPress}
        />
        <Text>{strings.guest_screen_desc}</Text>
      </View>
    </SafeAreaView>
  );
};

export default GuestScreen;
