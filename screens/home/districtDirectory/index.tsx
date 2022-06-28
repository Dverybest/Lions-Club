import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";
import {
  BaseMediumText,
  BaseRegularText,
  PrimaryButton,
  SearchBar,
} from "../../../components";
import { widthPixel, heightPixel, fontPixel } from "../../../utils";
import { MemberDetails } from "../../dashboard/profile/component";

export const DistrictDirectory = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <Wrapper>
        <Bar onPress={goBack} />
        <Title>Lion’s Club Members</Title>
        <SearchBar />
        <ListTitle>All Members</ListTitle>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={() => <MemberDetails />}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  backgroundColor: "#07030340",
  flex: 1,
  paddingTop: heightPixel(188),
}));
const Wrapper = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.white,
  paddingHorizontal: widthPixel(44),
  paddingTop: heightPixel(16),
  flex: 1,
  borderTopLeftRadius: widthPixel(50),
  borderTopRightRadius: widthPixel(50),
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

const ListTitle = styled(BaseMediumText)({
  marginBottom: heightPixel(13),
  marginTop: heightPixel(25),
  fontSize: fontPixel(16),
  lineHeight: fontPixel(19.89),
});
const ItemSeparatorComponent = styled.View({
  height: heightPixel(2),
  backgroundColor: "#ECECEC",
  marginBottom: heightPixel(11),
});
