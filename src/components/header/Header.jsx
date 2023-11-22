import Nav from "../nav/Nav";
import logo from "../img/LOGO green.svg";
import Slogan from "./Slogan";
const Header = () => {
  return (
    <>
      <div>
        <img src={logo} alt="logo" />
        <Nav />
      </div>
      <div>
        <Slogan />
      </div>
    </>
  );
};
export default Header;
