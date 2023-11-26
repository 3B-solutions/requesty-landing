import {
  BorderedBox,
  BunnonsContainer,
  ContentBox,
  ContentBoxWhite,
  InputStyled,
  MainSectionSubTitle,
  MainSectionTxt,
  StickyContent,
  StyledButton,
} from "./MainSection.styled";
import AddIcon from "../img/AddIcon.svg";
import { Button } from "../styled/Button.styled";
const MakingRequest = () => {
  return (
    <>
      <StickyContent>
        <ContentBoxWhite>
          <MainSectionSubTitle>Заповни запит</MainSectionSubTitle>
          <InputStyled type="text" placeholder="Інформація особи" />
          <InputStyled type="text" placeholder="Інформація запиту" />
          <BorderedBox>
            <StyledButton type="button">
              <img src={AddIcon} alt="add" />
            </StyledButton>
            <p>Додати документ</p>
          </BorderedBox>
          <BunnonsContainer>
            <Button className="borderedLight" type="button">
              Дрони
            </Button>
            <Button className="borderedLight" type="button">
              Гум. Допомога
            </Button>
            <Button className="borderedLight" type="button">
              Маск. сітки
            </Button>
          </BunnonsContainer>
        </ContentBoxWhite>
        <ContentBox>
          <MainSectionSubTitle>
            Військовий реєструєтся та заповнює заявку
          </MainSectionSubTitle>
          <MainSectionTxt>
            Для війсьового все максимально просто: зареєструвався, створив,
            підтвердив і очікуєш.
          </MainSectionTxt>
        </ContentBox>
      </StickyContent>
    </>
  );
};
export default MakingRequest;
