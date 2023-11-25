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
  &.small {
    padding: 8px 12px;
    width: fit-content;
    margin: 0 auto;
  }
  &.bordered {
    color: ${(props) => props.theme.colors.Text_Main};
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.Text_Main};
  }
  &.smallSize {
    padding: 5.25px 10.5px;
    justify-content: center;
    align-items: center;
    gap: 5.25px;
    font-size: 6.3px;
    font-style: normal;
    font-weight: 400;
    line-height: 9.45px;
    letter-spacing: 0.126px;
    border-radius: 4.2px;
    color: ${(props) => props.theme.colors.Text_Main};
    background: transparent;
    border: 0.525px solid ${(props) => props.theme.colors.Text_Main};
  }
  &.borderedLight {
    padding: 8px 16px;
    width: fit-content;
    background: transparent;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.Button};
    color: ${(props) => props.theme.colors.Button};

    font-family: "e-Ukraine-Regular", sans-serif;;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    letter-spacing: 0.24px;
  }
  &.right {
    margin-left: auto;
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
