import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { useNavigation } from "@react-navigation/native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import lion from "../../../assets/images/lion.png";
import { KeyboardAvoidingView, TextInput } from "../../../components";
import { PrimaryButton } from "../../../components/button";
import { BaseMediumText } from "../../../components/typography";
import { fontPixel, heightPixel, widthPixel } from "../../../utils";
import { IAuthNav } from "../types";

export const Login = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { navigate } = useNavigation<IAuthNav>();
  return (
    <KeyboardAvoidingView>
      <Container insets={insets}>
        <Logo source={lion} />
        <Title>LIONS CLUBS D404B1 NIG</Title>
        <CustumTextInput
          placeholderTextColor={colors.grey}
          keyboardType={'default'}
          placeholder="Enter User ID"
        />
        <PrimaryButton text={"Login"} onPress={() => navigate("OTP")} />
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
