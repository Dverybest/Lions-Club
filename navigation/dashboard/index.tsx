import {Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { RootTabParamList } from "../types";
import { ComingSoon, Home } from "../../screens";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        unmountOnBlur: true,
        headerShown: false,
        lazy: true,
        tabBarLabelPosition: "below-icon",
        tabBarLabel: ({ color }) => {
          return null;
        },
        tabBarIcon: ({ color }) => {
          if (route.name === "Home") {
            return <Octicons name="home" size={25} />;
          } else if (route.name === "Profile") {
            return <Octicons name="person" size={25} />;
          } else if (route.name === "Info") {
            return <Octicons name="info" size={25} />;
          } else return null;
        },
      })}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen
        name="Profile"
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.push('Profile'); 
          },
        })}
        component={Home}
      />
      <BottomTab.Screen name="Info" component={ComingSoon} />
    </BottomTab.Navigator>
  );
};
