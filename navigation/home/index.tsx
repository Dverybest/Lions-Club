import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Communication, DistrictDirectory } from "../../screens";

export type IHomeNavigator = {
  Communication: undefined;
};
const Stack = createNativeStackNavigator<IHomeNavigator>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Communication} name="Communication" />
    </Stack.Navigator>
  );
};
