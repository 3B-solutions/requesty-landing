import styled from "@emotion/styled";
import { mediaSizes } from "../constants/media";

export const SafetyWrapper = styled.div`
  font-family: "e-Ukraine-Regular", sans-serif;
  min-height: 611px;
  margin: 0 auto;
  display: flex;
  padding: 64px 32px 96px 32px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  background: ${(props) => props.theme.colors.White};
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
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const DiyaWrap = styled.div`
  display: flex;
  width: 332px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 16px;
`;

export const DiyaDescr = styled.div`
  display: flex;
  width: 268px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const UserWrap = styled.div`
  display: flex;
  width: 332px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.BG_Secondary};
`;

export const ImgWrap = styled.div`
  display: flex;
  width: 332px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  & img {
    border-radius: 8px;
  }
`;

export const UserDescr = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.24px;
`;
