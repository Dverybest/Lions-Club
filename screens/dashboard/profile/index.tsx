import styled from "@emotion/native";
import { fontPixel, heightPixel, widthPixel } from "../../../utils";
import * as React from "react";
import {
  BaseMediumText,
  BaseRegularText,
  PrimaryButton,
} from "../../../components";
import { useTheme } from "@emotion/react";
import { useNavigation } from "@react-navigation/native";
import { MemberDetails } from "./component";

export const Profile = () => {
  const { colors } = useTheme();
  const {goBack} = useNavigation();
  return (
    <Conatiner>
      <Wrapper>
        <Bar onPress={goBack}/>
        <Title>Membership details</Title>
        <MemberDetails/>
        <UpdateButton
          textStyle={{ color: colors.gun_metal }}
          onPress={() => {}}
          text="Update membership"
        />
        <SuspendButton onPress={() => {}} text="Suspend membership" />
      </Wrapper>
    </Conatiner>
  );
};

const Conatiner = styled.View(({ theme }) => ({
  backgroundColor: "#07030340",
  flex: 1,
  justifyContent: "flex-end",
}));
const Wrapper = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.white,
  paddingHorizontal: widthPixel(44),
  paddingTop: heightPixel(16),
  borderTopLeftRadius: widthPixel(50),
  borderTopRightRadius: widthPixel(50),
  paddingBottom: heightPixel(133),
}));
const Bar = styled.Pressable(({ theme }) => ({
  width: widthPixel(67),
  height: heightPixel(3.53),
  alignSelf: "center",
  backgroundColor: theme.colors.gun_metal,
  borderRadius: widthPixel(50),
}));
const Title = styled(BaseMediumText)({
  alignSelf: "center",
  marginTop: heightPixel(20),
  fontSize: fontPixel(19.89),
  marginBottom: heightPixel(28),
});

const UpdateButton = styled(PrimaryButton)({
  backgroundColor: "#7DF85E",
  marginBottom: heightPixel(20),
  marginTop:heightPixel(22)
});

const SuspendButton = styled(PrimaryButton)({
  backgroundColor: "#FF6B6B",
});
