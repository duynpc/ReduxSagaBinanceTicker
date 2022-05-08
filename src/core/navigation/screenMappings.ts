import React from "react";
import strings from "@constants/strings";
import GuestScreen from "@features/authentication/screens/guest";
import LoginScreen from "@features/authentication/screens/login";
import TickerScreen from "@features/ticker/screens/tickerList";
import * as ROUTE_NAMES from "./routeNames";

type ScreenWithName = {
  screen: React.FC<any>,
  name: string
}

export const screensMapping: Record<string, ScreenWithName> = Object.freeze({
  [ROUTE_NAMES.LOGIN_SCREEN]: {
    screen: LoginScreen,
    name: strings.login_screen_name
  },
  [ROUTE_NAMES.GUEST_SCREEN]: {
    screen: GuestScreen,
    name: strings.guest_screen_name
  },
  [ROUTE_NAMES.TICKER_SCREEN]: {
    screen: TickerScreen,
    name: strings.ticker_screen_name
  },
});

export const screenNameMapping = Object.freeze({
  [ROUTE_NAMES.LOGIN_SCREEN]: strings.login_screen_name,
  [ROUTE_NAMES.GUEST_SCREEN]: strings.guest_screen_name,
  [ROUTE_NAMES.TICKER_SCREEN]: strings.ticker_screen_name,
});