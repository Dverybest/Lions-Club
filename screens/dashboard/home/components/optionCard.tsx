import styled from "@emotion/native";
import { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { BaseMediumText } from "../../../../components";
import { fontPixel, heightPixel, widthPixel } from "../../../../utils";

type IOptionCard = {
  backgroundColor: string;
  title: string;
  imgSource: ImageSourcePropType;
  imgHeight: number;
  imgwidth: number;
  onPress?: () => void;
};
export const OptionCard: FC<IOptionCard> = ({
  backgroundColor,
  title,
  imgSource,
  imgHeight,
  imgwidth,
  onPress,
}) => {
  return (
    <Conatiner onPress={onPress} backgroundColor={backgroundColor}>
      <Image
        width={widthPixel(imgwidth)}
        height={heightPixel(imgHeight)}
        source={imgSource}
      />
      <Title>{title}</Title>
    </Conatiner>
  );
};

const Conatiner = styled.Pressable<{ backgroundColor: string }>(
  ({ backgroundColor }) => ({
    backgroundColor: backgroundColor,
    width: widthPixel(160),
    height: heightPixel(177),
    borderRadius: widthPixel(18),
    alignItems: "center",
    justifyContent: "center",
  })
);

const Title = styled(BaseMediumText)({
  fontSize: fontPixel(13),
  lineHeight: fontPixel(16.16),
  marginBottom: heightPixel(6),
  marginTop: heightPixel(20),
});

const Image = styled.Image<{ width: number; height: number }>(
  ({ height, width }) => ({
    height,
    width,
    resizeMode: "contain",
  })
);
