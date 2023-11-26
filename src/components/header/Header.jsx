import Nav from "../nav/Nav";
import logo from "../img/LOGO green.svg";
import Slogan from "./Slogan";
import { Link } from "react-scroll";
import { HeaderStyled, HeaderWrapper, SloganWrapper } from "./Header.styled";
const Header = () => {
  return (
    <HeaderWrapper id="weare">
      <HeaderStyled>
        <Link to="weare" smooth duration={600} style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo" />
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
