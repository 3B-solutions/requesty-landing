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

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 32px;
  background-color: ${props => props.theme.colors.BG_Secondary};
  border-radius: 16px;
`;
export const RoleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  height: 320px;
  width: 338px;
  padding: 25px;
  background-color: ${props => props.theme.colors.White};
  border-radius: 16px;
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
  width: 288px;
  height: 44px;
  color: ${props => props.theme.colors.White};
  background: ${props => props.theme.colors.Text_Main};
  border: none;
  cursor: pointer;
  border-radius: 6px;
`;

export const HeroWrapper = styled.div`
  background-color: ${props => props.theme.colors.White};
  padding: 25px; 
  border-radius: 8px 8px 0px 0px;
`;