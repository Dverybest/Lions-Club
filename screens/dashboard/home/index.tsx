import styled from "@emotion/native";
import { BaseMediumText, BaseRegularText, Header } from "../../../components";
import { fontPixel, heightPixel, widthPixel } from "../../../utils";
import { OptionCard } from "./components/optionCard";
import district_directory from "../../../assets/images/district_directory.png";
import communication from "../../../assets/images/communication.png";
import report from "../../../assets/images/report.png";
import membership from "../../../assets/images/membership.png";
import { InfoCard } from "./components/infoCard";

export const Home = () => {
  return (
    <Conatiner>
      <Header title="Lion’s Club 404B1" />
      <Wrapper
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: heightPixel(50) }}
      >
        <Title>Lion’s Club</Title>
        <SubTitle>
          Being a Lion is about leading by example, building relationships and
          improving the world through kindness.
        </SubTitle>
        <Row>
          <OptionCard
            imgHeight={79}
            imgwidth={62}
            imgSource={district_directory}
            backgroundColor="#E8FFFB"
            title="District Directory"
          />
          <OptionCard
            imgSource={communication}
            imgHeight={70.61}
            imgwidth={78}
            backgroundColor="#E0E9FF"
            title="Communication"
          />
        </Row>
        <Row>
          <OptionCard
            imgHeight={79}
            imgwidth={62}
            imgSource={report}
            backgroundColor="#FCECFF"
            title="Report"
          />
          <OptionCard
            imgSource={membership}
            imgHeight={70.61}
            imgwidth={78}
            backgroundColor="#FFF5E0"
            title="Membership"
          />
        </Row>
        <InfoCard />
      </Wrapper>
    </Conatiner>
  );
};

const Conatiner = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.white,
  flex: 1,
}));
const Wrapper = styled.ScrollView(({ theme }) => ({
  backgroundColor: theme.colors.white,
  flex: 1,
  paddingHorizontal: widthPixel(23),
  paddingTop: heightPixel(37),
}));
const Title = styled(BaseMediumText)({
  fontSize: fontPixel(18),
  lineHeight: fontPixel(22.37),
  marginBottom: heightPixel(6),
});

const SubTitle = styled(BaseRegularText)({
  fontSize: fontPixel(14),
  lineHeight: fontPixel(22),
  marginBottom: heightPixel(10),
});
const Row = styled.View(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: heightPixel(22),
}));
