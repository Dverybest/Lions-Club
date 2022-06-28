import styled from "@emotion/native";
import { FC } from "react";
import { fontPixel, heightPixel, widthPixel } from "../../utils";
import { BaseMediumText } from "../typography";

const ButtonStyle = styled.Pressable(({ theme }) => ({
  fontFamily: theme.fonts.regular,
  fontSize: fontPixel(13),
  lineHeight: fontPixel(16),
  borderRadius: widthPixel(50),
  backgroundColor: theme.colors.primary,
  paddingVertical: heightPixel(14),
  alignItems:'center',
  paddingHorizontal: widthPixel(10),
}));
const ButtonText = styled(BaseMediumText)(({theme})=>({
    color: theme.colors.white
}));
type IPrimaryButton = {
  text: string;
  onPress:()=>void
};
export const PrimaryButton: FC<IPrimaryButton> = ({ text,onPress }) => {
  return (
    <ButtonStyle onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonStyle>
  );
};
