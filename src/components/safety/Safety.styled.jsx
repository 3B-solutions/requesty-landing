import styled from "@emotion/styled";
import { mediaSizes } from "../constants/media";

export const SafetyWrapper = styled.div`
  font-family: "e-Ukraine-Regular", sans-serif;
  margin: 0 auto;
  display: flex;
  padding: 64px 32px 96px 32px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  background: ${(props) => props.theme.colors.White};

  @media screen and (max-width: ${mediaSizes.tablet}) {
    padding: 24px 8px;
  }

  @media screen and (max-width: ${mediaSizes.laptop}) {
    padding: 32px 16px;
  }
`;

export const SafetyTitle = styled.h2`
  color: ${(props) => props.theme.colors.Text_Main};
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 44.16px;
  letter-spacing: -0.96px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: ${mediaSizes.desktopS}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DiyaWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
  border-radius: 16px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    align-items: center;
  }

  @media screen and (min-width: ${mediaSizes.desktopS}) {
    width: 30%;
    align-items: start;
  }
`;

export const DiyaDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    align-items: center;
  }

  @media screen and (min-width: ${mediaSizes.desktopS}) {
    align-items: start;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  padding: 32px;
  width: 332px;
  heigth: 343px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.BG_Secondary};

`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & img {
    border-radius: 8px;
    max-width: 100%;
    height: auto;
  }
`;

export const UserDescr = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.24px;
`;
