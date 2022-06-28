import { FontAwesome, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { RootTabParamList } from "../types";
import useColorScheme from "../../hooks/useColorScheme";
import { Home } from "../../screens";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

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
      <BottomTab.Screen name="Profile" component={Home} />
      <BottomTab.Screen name="Info" component={Home} />
    </BottomTab.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
