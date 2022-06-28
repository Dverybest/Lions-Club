import styled from "@emotion/native";
import { BaseMediumText, BaseRegularText } from "../../../../components";
import { fontPixel, heightPixel, widthPixel } from "../../../../utils";

export const Message = () => {
  return (
    <Container>
      <DetailsRow>
        <Title>District convention</Title>
        <DateTime>Jan 20, 2022 | 10:32 AM</DateTime>
      </DetailsRow>
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sagittis,
        lectus sapien nulla diam vel dolor velit senectus. Cursus cras elementum
        ac amet eget. Pharetra aliquet consectetur leo iaculis feugiat sit. Mi
        at ultricies purus imperdiet...
      </Body>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  backgroundColor: "#F8FFFC",
  borderRadius: widthPixel(8),
  paddingHorizontal: widthPixel(17),
  paddingVertical: heightPixel(10),
}));

const Title = styled(BaseMediumText)({
  fontSize: fontPixel(16),
  lineHeight: fontPixel(19.89),
});
const Body = styled(BaseRegularText)({
  fontSize: fontPixel(10),
  color: '#72819F',
  lineHeight: fontPixel(15),
});
const DetailsRow = styled.View({
  flexDirection: "row",
  alignItems: "center",
  justifyContent:'space-between',
  marginBottom: heightPixel(4),
});
const DateTime = styled(BaseRegularText)({
    fontSize: fontPixel(8),
    lineHeight: fontPixel(15),
    color: '#AAB0BD'
})