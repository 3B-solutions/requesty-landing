import styled from "@emotion/styled";
import { mediaSizes } from "../constants/media";

export const HeaderStyled = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  max-width: 1920px;
  background-color: ${(props) => props.theme.colors.BG_Secondary};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    position: fixed;
    z-index: 999;
    gap: 200px;
    padding: 15px;
    align-items: center;
    justify-content: space-around;
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    gap: 500px;
    padding: 15px;
    align-items: center;
    justify-content: space-around;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    position: fixed;
    z-index: 999;
    align-items: center;
    justify-content: space-around;
    gap: 768px;
    opacity: 0.98;
  }
`;

export const SloganStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 535px;
  padding-top: 100px;
`;
export const SloganWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 64px;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 29.44px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 38px;
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    font-size: 40px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 48px;
  }
`;
export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0.32px;
`;
