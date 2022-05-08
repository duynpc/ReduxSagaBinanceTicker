/**
 * @format
 */
import React from "react";
import strings from "@constants/strings";
import { fireEvent, render } from "@testing-library/react-native";
import App from "App";

it('renders correctly', () => {
  const { getByText } = render(
    <App />
  );

  expect(getByText(strings.to_login)).toBeDefined();
  expect(getByText(strings.procced_as_guest)).toBeDefined();
});