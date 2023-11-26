import sold from "../../img/vector-soldier.jpg";
import vol from "../../img/vector-volunteer.jpg";
import don from "../../img/vector-donater.jpg";
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
  HeroWrapper,
  NavItem,
} from "./MainPage.styled";
const MainPage = () => {
  return (
    <PageStyled>
      {/* <HeaderSyle>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <NavWrapper>
          <Nav>
            <NavItem>Збори</NavItem>
            <NavItem>Фонди</NavItem>
            <NavItem>Петиції</NavItem>
            <NavItem>Ініціативи</NavItem>
          </Nav>
          <Nav>
            <NavItem>Увійти</NavItem>
            <NavItem>Реєстрація</NavItem>
          </Nav>
        </NavWrapper>
      </HeaderSyle>
      <HeroWrapper>
        <MainText>Разом до перемоги!</MainText>
        <CardWrapper>
          <RoleCard>
            <Img src={sold} alt="soldier" />
            <p>Військовий</p>
            <h3>Створюй запит на допомогу</h3>
            <Button>Створити запит</Button>
          </RoleCard>
          <RoleCard>
            <Img src={vol} alt="volunteer" />
            <p>Волонтер</p>
            <h3>Відгукуйся на запит та відкривай збір</h3>
            <Button>Відкрити збір</Button>
          </RoleCard>
          <RoleCard>
            <Img src={don} alt="donater" />
            <p>Донатер</p>
            <h3>Донать та поширюй</h3>
            <Button>Підтримати</Button>
          </RoleCard>
        </CardWrapper>
      </HeroWrapper> */}
    </PageStyled>
  );
};
export default MainPage;
