import Nav from "../nav/Nav";
import logo from "../img/LOGO green.svg";
import Slogan from "./Slogan";
import { HeaderStyled, HeaderWrapper } from "./Header.styled";
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <img src={logo} alt="logo" />
        <Nav />
      </HeaderStyled>
      <div>
        <Slogan />
      </div>
    </HeaderWrapper>
  );
};
export default Header;
