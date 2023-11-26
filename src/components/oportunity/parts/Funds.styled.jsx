import styled from "@emotion/styled";
import { mediaSizes } from "../../constants/media";

export const FundsWrapper = styled.div`
  font-family: "e-Ukraine-Regular", sans-serif;
  position: relative;
  margin: 0 auto;
  padding-top: 34px;
  padding-bottom: 0px;
  background: #eceef2;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    min-width: 1376px;
    padding-left: 32px;
    padding-right: 147px;
    border-radius: 16px;
    flex-direction: row;
  }
`;

export const FixedText = styled.div`
  width: 317px;
  background-color: #f0f0f0;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 16px;
  padding-left: 30px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 32px;
    margin-right: 124px;
  }
`;

export const FundsTitle = styled.h2`
  color: ${(props) => props.theme.colors.Text_Main};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.96px;
  text-align: flex-start;
`;

export const FundsTexts = styled.p`
  color: ${(props) => props.theme.colors.Text_Main};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.32px;
  text-align: start;
`;

export const ScrollableContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 16.8px;
  padding-bottom: 0px;
  width: 756px;
  min-height: 451.5px;
  max-height: 451.5px;
  flex-shrink: 0;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid ${(props) => props.theme.colors.White};
  background: ${(props) => props.theme.colors.White}; /* Змінено фон на білий */

  &::-webkit-scrollbar {
    width: 0.2px; /* Ширина повзунка */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const HeadWrap = styled.div`
  padding-left: 16.8px;
  padding-right: 3.2px;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 345px;
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 33.6px;
`;

export const Nav = styled.ul`
  font-size: 6.3px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  gap: 16px;
  line-height: 18px;
  letter-spacing: 0.24px;
  position: relative;

  &::after {
    content: "";
    width: 0.525px;
    height: 21px;
    background: #d9d9d9;
    position: absolute;
    right: -16.8px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const NavSimple = styled.ul`
  font-size: 6.3px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  gap: 16px;
  line-height: 18px;
  letter-spacing: 0.24px;
  position: relative;
`;

export const MainInfo = styled.div`
  margin-top: 48px;
  margin-bottom: 68px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 320px;
`;

export const TitleInfo = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TitleFunds = styled.h2`
  color: ${(props) => props.theme.colors.Text_Main};
  font-size: 25.2px;
  font-style: normal;
  font-weight: 400;
  line-height: 44.16px;
  letter-spacing: -0.96px;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  height: 26px;
`;

export const TextsParag = styled.p`
  max-width: 100%;
  font-size: 8.4px;
  font-style: normal;
  font-weight: 400;
  line-height: 12.6px;
  letter-spacing: 0.168px;
  text-align: justify;
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
`;

export const ButtonInfo = styled.button`
  display: inline-flex;
  padding: 8.4px 16.8px;
  cursor: pointer;
  gap: 5.25px;
  border-radius: 4.2px;
  border: 0.525px solid ${(props) => props.theme.colors.Text_Main};
  background: ${(props) => props.theme.colors.Text_Main};
  color: ${(props) => props.theme.colors.BG_Main};
  font-size: 6.3px;
  font-style: normal;
  font-weight: 400;
  line-height: 9.45px;
  letter-spacing: 0.126px;
`;

export const FundsParts = styled.div`
  min-height: 600px;
  background: #eceef2;
  padding-bottom: 16.8px;
`;

export const FundList = styled.ul`
  padding-top: 16px;
  display: flex;
  align-items: center;
  align-content: center;
  gap: 16px 8.4px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FundPart = styled.li`
  display: flex;
  width: 357px;
  padding: 16.8px;
  gap: 16.8px;
  flex-shrink: 0;
  border-radius: 8.4px;
  background: ${(props) => props.theme.colors.White};
`;

export const FundLook = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16.8px;
`;

export const FundDescr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 8.4px;
`;

export const NameFund = styled.h3`
  align-self: stretch;
  color: #000;
  font-size: 12.6px;
  font-style: normal;
  font-weight: 400;
  line-height: 15.12px;
`;

export const ShortDescr = styled.p`
  color: #000;
  font-size: 8.4px;
  font-style: normal;
  font-weight: 400;
  line-height: 12.6px;
  letter-spacing: 0.168px;
`;
export const StyledFund = styled.li`
  border-bottom: 1px solid #000;
`;
