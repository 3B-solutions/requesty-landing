import emoji1 from "../../img/emoji1.jpg";
import emoji2 from "../../img/emoji2.jpg";
import emoji3 from "../../img/emoji3.jpg";
import logo from "../../img/LOGO green.svg";
import MainSection from "../../mainSection/MainSection";
import {
  CardWrapper,
  RoleCard,
  Img,
  HeaderSyle,
  PageStyled,
  Nav,
  NavWrapper,
  MainText,
  Button,
} from "./MainPage.styled";
const MainPage = () => {
  return (
    <PageStyled>
      <HeaderSyle>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <NavWrapper>
          <Nav>
            <li>Збори</li>
            <li>Фонди</li>
            <li>Петиції</li>
            <li>Ініціативи</li>
          </Nav>
          <Nav>
            <li>Увійти</li>
            <li>Реєстрація</li>
          </Nav>
        </NavWrapper>
      </HeaderSyle>
      <div>
        <MainText>Разом до перемоги!</MainText>
        <CardWrapper>
          <RoleCard>
            <Img src={emoji1} alt="soldier" />
            <p>Військовий</p>
            <h3>Створює запит на допомогу</h3>
            <Button>Створити запит</Button>
          </RoleCard>
          <RoleCard>
            <Img src={emoji3} alt="volunteer" />
            <p>Волонтер</p>
            <h3>Відгукується на запит та відкриває збір</h3>
            <Button>Відкрити збір</Button>
          </RoleCard>
          <RoleCard>
            <Img src={emoji2} alt="donater" />
            <p>Донатер</p>
            <h3>Донатить та поширює</h3>
            <Button>Підтримати</Button>
          </RoleCard>
        </CardWrapper>
      </div>
          <MainSection></MainSection>
    </PageStyled>
  );
};
export default MainPage;
