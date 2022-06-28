import styled from "@emotion/native";
import { Octicons } from "@expo/vector-icons";
import { FC } from "react";
import { fontPixel, heightPixel, widthPixel } from "../../utils";
import { BaseMediumText, BaseRegularText } from "../typography";
import logo from "../../assets/images/lion.png";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

type IHeader = {
  title: string;
  showBackBtn?: boolean;
};

export const Header: FC<IHeader> = ({ title, showBackBtn=false }) => {
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();
  return (
    <Conatiner insets={insets}>
      {showBackBtn && (
        <BackButton onPress={goBack}>
          <Octicons name={"chevron-left"} size={fontPixel(12)} />
          <BackText>back</BackText>
        </BackButton>
      )}
      <Row isBackBtnShowing={showBackBtn}>
        <Logo source={logo} />
        <Title isBackBtnShowing={showBackBtn}>{title}</Title>
      </Row>
      <Octicons name={"bell"} size={fontPixel(20)} />
    </Conatiner>
  );
};

const Conatiner = styled.View<{ insets: EdgeInsets }>(({ insets }) => ({
  flexDirection: "row",
  marginTop: heightPixel(22) + insets.top,
  justifyContent: "space-between",
  alignItems:'center',
  paddingHorizontal: widthPixel(23),
}));
const Logo = styled.Image({
  width: 34,
  height: 32,
});

const Title = styled(BaseMediumText)<{isBackBtnShowing:boolean}>(({isBackBtnShowing})=>({
  fontSize: fontPixel(14),
  lineHeight: fontPixel(17.4),
  marginLeft: widthPixel(6),
  textAlign:'center',
  flex:isBackBtnShowing?0:1,
}));
const Row = styled.View<{isBackBtnShowing?:boolean}>(({isBackBtnShowing})=>({
  alignItems: "center",
  flex:isBackBtnShowing?0:1,
  justifyContent:isBackBtnShowing? "center":undefined,
  flexDirection: "row",
}));
const BackButton = styled.Pressable({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  width: widthPixel(40),
});
const BackText = styled(BaseRegularText)(({ theme }) => ({
  color: theme.colors.gun_metal,
  fontSize: fontPixel(12),
  lineHeight: fontPixel(14.68),
  marginLeft: widthPixel(6),
}));
