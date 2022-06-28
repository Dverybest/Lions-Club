import styled from "@emotion/native";
import { FlatList } from "react-native";
import {
  BaseMediumText,
  BaseRegularText,
  Header,
  SearchBar,
} from "../../../components";
import { widthPixel, heightPixel, fontPixel } from "../../../utils";
import { Message } from "./message";

export const Communication = () => {
  return (
    <Conatiner>
      <Header showBackBtn title="Lion’s Club 404B1" />
      <Wrapper>
        <SearchBar />
        <ListTitle>All Members</ListTitle>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={() => <Message/>}
        />
      </Wrapper>
    </Conatiner>
  );
};
const Conatiner = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.white,
  flex: 1,
}));
const Wrapper = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.white,
  flex: 1,
  paddingHorizontal: widthPixel(23),
  paddingTop: heightPixel(37),
}));
const ListTitle = styled(BaseMediumText)({
  marginBottom: heightPixel(13),
  marginTop: heightPixel(25),
  fontSize: fontPixel(16),
  lineHeight: fontPixel(19.89),
});
const ItemSeparatorComponent = styled.View({
  backgroundColor: "#ECECEC",
  marginBottom: heightPixel(10),
});
