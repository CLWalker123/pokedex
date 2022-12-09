/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import PokemonListScreen from "../screens/PokemonListScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen";
import { RootStackParamList } from "./types";
import LinkingConfiguration from "./LinkingConfiguration";
import Colors from "../constants/Colors";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const theme = React.useMemo(
    () =>
      colorScheme === "dark"
        ? { ...DarkTheme, colors: { ...DarkTheme.colors, ...Colors.dark } }
        : {
            ...DefaultTheme,
            colors: { ...DefaultTheme.colors, ...Colors.light },
          },
    [colorScheme]
  );
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonListScreen"
        component={PokemonListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PokemonDetailScreen"
        component={PokemonDetailScreen}
        options={{ title: "", headerTintColor: "#F8EADC" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ headerTitle: "My Party", headerTintColor: "#F8EADC" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
