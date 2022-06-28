import styled from "@emotion/native";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import { FC } from "react";
import { fontPixel, heightPixel, widthPixel } from "../../utils";
import { BaseMediumText } from "../typography";
import logo from "../../assets/images/lion.png";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

type IHeader = {
  title: string;
};

export const Header: FC<IHeader> = ({ title }) => {
    const insets = useSafeAreaInsets();
  return (
    <Conatiner insets={insets}>
      <Logo source={logo} />
      <Title>{title}</Title>
      <Octicons name={"bell"} size={25} />
    </Conatiner>
  );
};

const Conatiner = styled.View<{insets:EdgeInsets}>(({insets})=>({
  flexDirection: "row",
  marginTop:heightPixel(22)+insets.top,
  justifyContent:'space-between',
  paddingHorizontal:widthPixel(23)
}));
const Logo = styled.Image({
  width: 34,
  height: 32,
});

const Title = styled(BaseMediumText)({
  fontSize: fontPixel(14),
  lineHeight: fontPixel(17.4),
});
