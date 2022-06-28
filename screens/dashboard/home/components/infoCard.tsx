import styled from "@emotion/native";
import { BaseMediumText, BaseRegularText } from "../../../../components";
import { fontPixel, heightPixel, widthPixel } from "../../../../utils";
import home_info from "../../../../assets/images/home_info.png";
export const InfoCard = () => {
  return (
    <Conatiner>
      <Image source={home_info} />
      <Title>
        When you become a Lion, you become part of a global network of
        volunteers working together to make a difference.{" "}
      </Title>
    </Conatiner>
  );
};

const Conatiner = styled.Pressable({
  backgroundColor: "#F7F7F7",
  height: heightPixel(129),
  flexDirection: "row",
  paddingHorizontal: widthPixel(18),
  borderRadius: widthPixel(18),
  paddingTop: heightPixel(24),
});

const Title = styled(BaseRegularText)({
  fontSize: fontPixel(13),
  lineHeight: fontPixel(20),
  marginLeft: widthPixel(12),
  flex: 1
});

const Image = styled.Image({
  height: widthPixel(87),
  width: widthPixel(79),
});
