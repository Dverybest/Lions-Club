import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { useNavigation } from "@react-navigation/native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import lion from "../../../assets/images/lion.png";
import { KeyboardAvoidingView, TextInput } from "../../../components";
import { PrimaryButton } from "../../../components/button";
import { BaseMediumText } from "../../../components/typography";
import { fontPixel, heightPixel, widthPixel } from "../../../utils";
import { IRootNav } from "../types";

export const OTP = () => {
  const insets = useSafeAreaInsets();
  const { reset } = useNavigation<IRootNav>();
  const { colors } = useTheme();
  return (
    <KeyboardAvoidingView>
      <Container insets={insets}>
        <Logo source={lion} />
        <Title>LIONS CLUBS D404B1 NIG</Title>
        <CustumTextInput
          placeholderTextColor={colors.grey}
          keyboardType={'default'}
          placeholder="One-Time Password"
        />
        <PrimaryButton
          onPress={() => reset({ index: 0, routes: [{ name: "Dashboard" }] })}
          text={"Continue"}
        />
      </Container>
    </KeyboardAvoidingView>
  );
};

const Container = styled.View<{ insets: EdgeInsets }>(({ theme, insets }) => ({
  flex: 1,
  paddingHorizontal: widthPixel(44),
  paddingTop: insets.top,
  backgroundColor: theme.colors.white,
}));
const Logo = styled.Image({
  alignSelf: "center",
  width: 124,
  height: 117,
  marginTop: heightPixel(85),
});

const Title = styled(BaseMediumText)({
  alignSelf: "center",
  marginTop: heightPixel(11),
  fontSize: fontPixel(18),
  marginBottom: heightPixel(137),
});

const CustumTextInput = styled(TextInput)({
  marginBottom: heightPixel(26),
  elevation: 2,
  shadowColor: "black",
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.11,
  shadowRadius: widthPixel(2),
});
