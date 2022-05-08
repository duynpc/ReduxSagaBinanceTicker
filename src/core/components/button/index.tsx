import React from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import styles from "./styles";

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  textButton: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = (
  { style, textStyle, disabled, textButton, onPress }
) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[styles.label, textStyle]}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;
