import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.Text_Main};
  background: ${(props) => props.theme.colors.Text_Main};
  color: ${(props) => props.theme.colors.White};
  cursor: pointer;
  width: 100%;
  &.bordered {
    color: ${(props) => props.theme.colors.Text_Main};
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.Text_Main};
  }
  &.borderedLight {
    padding: 8px 16px;
    width: fit-content;
    background: transparent;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.Button};
    color: ${(props) => props.theme.colors.Button};

    font-family: e-Ukraine;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    letter-spacing: 0.24px;
  }

  &:hover {
    /* animation: jelly 0.5s; */
  }

  &.totop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50px;
    font-size: 26px;
    width: 50px;
    height: 50px;
    padding: 0;

    & svg {
      position: relative;
      bottom: 1px;
    }

    &::before,
    &::after {
      display: none;
    }
  }
`;
