import { BorderedBox, BunnonsContainer, ContentBox, ContentBoxWhite, InputStyled, StickyContent, StyledButton } from "./MainSection.styled";
import AddIcon from "../img/AddIcon.svg";
import { Button } from "../styled/Button.styled";
const MakingRequest = () => {
  return (
    <>
        <StickyContent>
          <ContentBoxWhite>
            <h3>Заповни запит</h3>
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
            <h3>Військовий реєструется та заповнює заявку</h3>
            <p>
              Є велика кількість бригад мало відомих для широго загалу. від
              цього і малі охоплення на зборах
            </p>
          </ContentBox>
        </StickyContent>
    </>
  );
};
export default MakingRequest;
