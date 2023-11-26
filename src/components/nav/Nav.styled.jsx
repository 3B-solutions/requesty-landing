import styled from "@emotion/styled";

export const NavStyled = styled.div`
  display: flex;
  gap: 32px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.24px;
  & a {
    color: ${(props) => props.theme.colors.Text_Main};
  }
`;
