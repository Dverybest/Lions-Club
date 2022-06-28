import styled from "@emotion/native";
import { fontPixel, heightPixel, widthPixel } from "../../utils";

export const TextInput = styled.TextInput(({ theme }) => ({
  fontFamily: theme.fonts.regular,
  fontSize: fontPixel(13),
  lineHeight: fontPixel(16),
  borderRadius:widthPixel(22.5),
  backgroundColor:theme.colors.white,
  paddingVertical:heightPixel(14),
  textAlign:'center',
  paddingHorizontal:widthPixel(10)
}));
