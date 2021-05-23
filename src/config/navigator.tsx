import React, { ReactElement } from "react";

import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { Home, Login } from "../screens";

import { colors } from "../utils";
import { useAuth } from "../context/auth-context";

export type StackNavigatorParams = {
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();

const navigatorOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.purple,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  headerTintColor: colors.lightGreen,
  headerTitleStyle: {
    fontFamily: "DeliusUnicase_700Bold",
    fontSize: 20,
  },
  headerBackTitleStyle: {
    fontFamily: "DeliusUnicase_400Regular",
    fontSize: 14,
  },
};

export default function Navigator(): ReactElement {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
