import styled from "@emotion/native";
import { fontPixel, heightPixel, widthPixel } from "../../utils";
import { Octicons } from "@expo/vector-icons";
import { BaseRegularText } from "../typography";
export const SearchBar = () => {
  return (
    <Container>
      <Octicons size={fontPixel(16)} name={"search"} />
      <TextInput
        placeholderTextColor={"#AAB0BD"}
        placeholder="Search for members"
      />
      <FitlerButton>
        <Octicons size={fontPixel(16)} name={"filter"} />
        <Filter>Filter</Filter>
      </FitlerButton>
    </Container>
  );
};
const Container = styled.View(({ theme }) => ({
  borderRadius: widthPixel(22.5),
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: theme.colors.white,
  paddingVertical: heightPixel(4),
  paddingHorizontal: widthPixel(10),
  elevation: 2,
  shadowColor: "black",
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.11,
  shadowRadius: widthPixel(2),
}));

const TextInput = styled.TextInput(({ theme }) => ({
  fontFamily: theme.fonts.regular,
  fontSize: fontPixel(13),
  lineHeight: fontPixel(16),
  flex: 1,
  marginLeft: widthPixel(16),
}));

const FitlerButton = styled.Pressable({
  backgroundColor: "#FFEFE3",
  borderRadius: widthPixel(22.5),
  flexDirection: "row",
  paddingVertical:heightPixel(8),
  paddingHorizontal:widthPixel(8)
});
const Filter = styled(BaseRegularText)({
  marginLeft:widthPixel(3)
});
