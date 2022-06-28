import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { RootStackParamList } from "./types";
import { AuthNavigator } from "./auth";
import { BottomTabNavigator } from "./dashboard";
import { DistrictDirectory, Profile } from "../screens";
import { HomeNavigator } from "./home";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          animation: "slide_from_bottom",
        }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DistrictDirectory" component={DistrictDirectory} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
