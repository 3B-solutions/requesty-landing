import {
  MainSectionSubTitle,
  ContentBox,
  ContentBoxWhite,
  GrayBox,
  InfoTxt,
  StickyContent,
  MainSectionTxt,
  BunnonsContainer,
} from "./MainSection.styled";
import Defender_Small from "../img/vector-soldier.jpg";

import DoneMark from "../img/DoneMark.svg";

import { Button } from "../styled/Button.styled";
const CollaborationConfirmed = () => {
  return (
    <>
      <StickyContent>
        <ContentBoxWhite>
          <GrayBox className="row">
            <img src={DoneMark} alt="add" width={"24px"} height={"24px"} />
            <InfoTxt>
              Співпраця підтверджена можете починати збір. Успіхів.
            </InfoTxt>
          </GrayBox>
          <BunnonsContainer>
            <img
              src={Defender_Small}
              alt="add"
              width={"40px"}
              height={"40px"}
            />
            <div>
              <InfoTxt>Військовий</InfoTxt>
              <InfoTxt>Михайло Михайлович</InfoTxt>
            </div>
            <Button className="borderedLight right" type="button">
              Дрони
            </Button>
          </BunnonsContainer>
          <InfoTxt>Відкритий запит</InfoTxt>
          <h4>Три дрона DJI Mavic 3 </h4>
          <InfoTxt>
            DJI - Mavic 3! 🚁 Нам життєво необхідно робити скиди. Нажаль
            минулого місяця ми втратили вже 3 штуки через ворожий реб, тому
            потребуємо терміново нові дрони для розвідки та знищення ворогів.
          </InfoTxt>
          <Button type="button">Відкрити збір</Button>
          <Button className="bordered" type="button">
            Переглянути запит
          </Button>
        </ContentBoxWhite>
        <ContentBox>
          <MainSectionSubTitle>
            Військовий підтвердив співпрацю
          </MainSectionSubTitle>
          <MainSectionTxt>
            Волонтер отримає сповіщення про підтвердження та може переходити до
            створення збору.
          </MainSectionTxt>
        </ContentBox>
      </StickyContent>
    </>
  );
};
export default CollaborationConfirmed;
