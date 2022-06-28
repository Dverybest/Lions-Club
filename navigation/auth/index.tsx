import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, OTP } from "../../screens";

export type IAuthNavigator = {
  Login: undefined;
  OTP:undefined;
};
const Stack = createNativeStackNavigator<IAuthNavigator>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
};
