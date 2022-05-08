/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackParamList from "@navigation/stackParamList";
import { screensMapping } from "@navigation/screenMappings";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/core/store/store";
import { GUEST_SCREEN } from "@navigation/routeNames";


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={GUEST_SCREEN}>
        {Object.keys(screensMapping).map(route => (
          <Stack.Screen
            key={route}
            name={route as keyof RootStackParamList}
            component={screensMapping[route].screen}
            options= {{
              title: screensMapping[route].name
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
