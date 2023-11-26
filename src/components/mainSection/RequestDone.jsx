import {
  BunnonsContainer,
  ContentBox,
  ContentBoxWhite,
  StickyContent,
  MainSectionSubTitle,
  MainSectionTxt,
  InfoTxt,
  TxtLineWrapper,
  SummInfo
} from "./MainSection.styled";
import Dron from "../img/Dron.png";
import { Button } from "../styled/Button.styled";
const RequestDone = () => {
  return (
    <>
      <StickyContent>
        <ContentBoxWhite>
          <BunnonsContainer>
            <MainSectionSubTitle>Три дрона DJI Mavic 3 </MainSectionSubTitle>
            <Button className="borderedLight right" type="button">
              Дрони
            </Button>
          </BunnonsContainer>
          <div>
            <img src={Dron} alt="add" width={"100%"} />
          </div>
          <BunnonsContainer>
            <TxtLineWrapper>
              <InfoTxt>Зiбранно</InfoTxt>
              <SummInfo>13 200 ₴</SummInfo>
              <InfoTxt>(5%)</InfoTxt>
            </TxtLineWrapper>
            <TxtLineWrapper className="right">
              <InfoTxt>Ціль</InfoTxt>
              <SummInfo>264 000 ₴</SummInfo>
            </TxtLineWrapper>
          </BunnonsContainer>
          <div>progress line</div>
          <InfoTxt>
            DJI - Mavic 3! 🚁 Нам життєво необхідно робити скиди. Нажаль
            минулого місяця ми втратили вже 3 штуки через ворожий реб, тому
            потребуємо терміново нові дрони для розвідки та знищення ворогів.
          </InfoTxt>
          <BunnonsContainer>
            <Button type="button">Донат</Button>
            <Button className="bordered" type="button">
            Поділитись
            </Button>
          </BunnonsContainer>
        </ContentBoxWhite>
        <ContentBox>
          <MainSectionSubTitle>Волонтер відкриває збір</MainSectionSubTitle>
          <MainSectionTxt>
            Заповниши карточку збору, прописавши ціль та опис, волонтер успішно відкриває збір.
          </MainSectionTxt>

        </ContentBox>
      </StickyContent>
    </>
  );
};
export default RequestDone;
