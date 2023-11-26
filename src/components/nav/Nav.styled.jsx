import styled from "@emotion/styled";

export const NavStyled = styled.div`
  display: flex;
  gap: 32px;
  & a {
    color: ${(props) => props.theme.colors.Text_Main};
  }
`;
