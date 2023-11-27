import { NavStyled } from "./Nav.styled";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <NavStyled>
      <Link to="weoffer" smooth duration={600} style={{ cursor: "pointer" }}>
        Ми пропонуємо
      </Link>
      <Link to="howitworks" smooth duration={500} style={{ cursor: "pointer" }}>
        Як це працює
      </Link>
      <Link to="oportunity" smooth duration={500} style={{ cursor: "pointer" }}>
        Інші можливості
      </Link>
      <Link to="footer" smooth duration={500} style={{ cursor: "pointer" }}>
        Контакти
      </Link>
    </NavStyled>
  );
};
export default Nav;
