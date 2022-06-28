import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DistrictDirectory } from "../../screens";

export type IHomeNavigator = {
  DistrictDirectory: undefined;
  Profile: undefined;
};
const Stack = createNativeStackNavigator<IHomeNavigator>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          animation: "slide_from_bottom",
        }}
      >
      
      </Stack.Group>
    </Stack.Navigator>
  );
};
