import { NavStyled } from "./Nav.styled";

import Scroll from "react-scroll";

const Nav = () => {
  const ScrollLink = Scroll.ScrollLink;
  return (
    <div>
      <NavStyled>
        <nav>
          <ScrollLink
            to="example-destination"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class"
            activeClass="some-active-class"
          >
            Хто ми
          </ScrollLink>
          <ScrollLink
            to="example-destination"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class"
            activeClass="some-active-class"
          >
            Як це працює
          </ScrollLink>
          <ScrollLink
            to="example-destination"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class"
            activeClass="some-active-class"
          >
            Додаткові можливості
          </ScrollLink>
        </nav>
      </NavStyled>
    </div>
  );
};
export default Nav;
