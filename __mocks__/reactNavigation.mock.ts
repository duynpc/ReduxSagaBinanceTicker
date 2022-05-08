// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("@react-navigation/native", () => {
  const original = jest.requireActual("@react-navigation/native");
  return { ...original, useIsFocused: () => (true) };
});
 
export {};
