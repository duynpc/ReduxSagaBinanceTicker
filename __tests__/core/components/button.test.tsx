import React from "react";
import Button from "@components/button";
import strings from "@constants/strings";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

it('renders correctly', () => {
  const { getByText } = render(
    <Button textButton={strings.to_login} />
  );

  expect(getByText(strings.to_login)).toBeDefined();
});

it('should call onpress when pressed', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(
    <Button textButton={strings.to_login} onPress={onPressMock} />
  );
  
  fireEvent.press(getByText(strings.to_login));
  
  waitFor(() => expect(onPressMock).toBeCalled())
});
