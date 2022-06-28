import styled from "@emotion/native";
import React from "react";
import { BaseMediumText, BaseRegularText } from "../../../../components";
import { fontPixel, heightPixel, widthPixel } from "../../../../utils";
import { Octicons, Feather } from "@expo/vector-icons";

export const MemberDetails = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <DetailsRow>
        <Octicons size={fontPixel(12)} name={"people"} />
        <Name>Dele Ayodeji</Name>
        <IdNumber>LC-00235</IdNumber>
      </DetailsRow>
      <DetailsRow>
        <Row>
          <Octicons size={fontPixel(12)} name={"location"} />
          <DetailText>Civil servant</DetailText>
        </Row>
        <Row style={{  marginLeft: widthPixel(41)}}>
          <Feather size={fontPixel(12)} name={"phone"} />
          <DetailText>07068359554</DetailText>
        </Row>
      </DetailsRow>
      <DetailsRow>
        <Octicons size={fontPixel(12)} name={"location"} />
        <DetailText>12 ayodeji makinde, oshodi</DetailText>
      </DetailsRow>
    </Container>
  );
};

const Container = styled.View({});
const DetailsRow = styled.View({
  flexDirection: "row",
  alignItems: "center",
  marginBottom: heightPixel(12),
});
const Row = styled.View({
  flexDirection: "row",
  alignItems: "center",
});
const Name = styled(BaseMediumText)({
  marginLeft: widthPixel(9),
  fontSize: fontPixel(13),
  lineHeight: fontPixel(16),
});
const IdNumber = styled(Name)({
  marginLeft: widthPixel(13),
});
const DetailText = styled(BaseRegularText)({
  marginLeft: widthPixel(9),
  fontSize: fontPixel(11),
  lineHeight: fontPixel(13),
});
