import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IAuthNavigator } from "../../navigation/auth";
import { RootStackParamList } from "../../navigation/types";

export type IAuthNav = NativeStackNavigationProp<IAuthNavigator>
export type IRootNav = NativeStackNavigationProp<RootStackParamList>