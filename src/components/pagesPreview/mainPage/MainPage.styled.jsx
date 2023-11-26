import styled from "@emotion/styled";

export const PageStyled = styled.div`
  width: 1144px;
  margin: auto;
  /* padding: 25px; */
  border-radius: 16px;
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 52px;
`;
export const Nav = styled.ul`
  display: flex;
  gap: 25px;
`;
export const NavItem = styled.li`
  cursor: pointer;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 32px;
  background-color: ${(props) => props.theme.colors.BG_Secondary};
  border-radius: 16px;
`;
export const RoleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 320px;
  width: 338px;
  padding: 25px;
  background-color: ${(props) => props.theme.colors.White};
  border-radius: 16px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  max-width: 100px;
`;
export const HeaderSyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 108px;
`;

export const MainText = styled.h2`
  width: 605px;
  margin: 15px auto;
`;

export const Button = styled.button`
  display: flex;
  padding: 12.711px;
  justify-content: center;
  align-items: center;
  gap: 7.944px;
  align-self: stretch;
  color: ${(props) => props.theme.colors.White};
  background: ${(props) => props.theme.colors.Text_Main};
  border: none;
  cursor: pointer;
  border-radius: 6px;
`;

export const HeroWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.White};
  padding: 25px;
  border-radius: 8px 8px 0px 0px;
`;
