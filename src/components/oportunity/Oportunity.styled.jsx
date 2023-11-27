import styled from "@emotion/styled";
import { mediaSizes } from "../constants/media";

export const SectionWrapper = styled.div`
  font-family: "e-Ukraine-Regular", sans-serif;
  position: relative;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 96px;

  background: ${(props) => props.theme.colors.Button};
  display: flex;
  flex-direction: column;
  gap: 64px;
  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding-right: 0;
    padding-left: 0;
  }
  @media screen and (min-width: ${mediaSizes.tabletS}) {
    gap: 128px;
    padding-right: 32px;
    padding-left: 32px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.Text_Main};
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: -0.96px;
  text-align: center;
`;
