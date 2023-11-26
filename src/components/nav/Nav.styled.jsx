import styled from "@emotion/styled";
import { mediaSizes } from "../constants/media";

export const NavStyled = styled.div`
  display: flex;
  gap: 32px;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.24px;
  & a {
    color: ${(props) => props.theme.colors.Text_Main};
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 10px;
    line-height: 18px;
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    font-size: 12px;
  }
`;
