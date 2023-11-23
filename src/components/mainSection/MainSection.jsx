import {
  ContentBox,
  InputStyled,
  MainWrapper,
  StickyContainer,
  StickyContent,
  StickyElement,
} from "./MainSection.styled";

const MainSection = () => {
  return (
    <MainWrapper>
      <div>Main section</div>
      <StickyContainer>
        <StickyElement>Sticky Element 1</StickyElement>
        <StickyContent>
          <ContentBox>
            <h3>Заповни запит</h3>
            <InputStyled type="text" placeholder="Інформація особи" />
            <InputStyled type="text" placeholder="Інформація запиту" />
          </ContentBox>
          <ContentBox>
            <h3>Військовий реєструется та заповнює заявку</h3>
          </ContentBox>
        </StickyContent>
        <StickyElement>Sticky Element 2</StickyElement>
        <StickyContent>
          <p>Sticky Content 2</p>
        </StickyContent>
        <StickyElement>Sticky Element 3</StickyElement>
        <StickyContent>
          <p>Sticky Content 3</p>
        </StickyContent>
      </StickyContainer>
    </MainWrapper>
  );
};
export default MainSection;
