import Nav from "../nav/Nav";
import logo from "../img/LOGO green.svg";
import logoSmall from "../img/logoSmall.svg";
import Slogan from "./Slogan";
import { Link } from "react-scroll";

import { HeaderStyled, HeaderWrapper, SloganWrapper } from "./Header.styled";
const Header = () => {
  const windowWidth = window.innerWidth;
  return (
    <HeaderWrapper id="weare">
      <HeaderStyled>
        <Link to="weare" smooth duration={600} style={{ cursor: "pointer" }}>
          {windowWidth <= 768 ? (
            <img
              src={logoSmall}
              alt="logoSmall"
              width={"50px"}
              height={"50px"}
            />
          ) : (
            <img src={logo} alt="logo" />
          )}
        </Link>
        <Nav />
      </HeaderStyled>
      <SloganWrapper>
        <Slogan />
      </SloganWrapper>
    </HeaderWrapper>
  );
};
export default Header;
