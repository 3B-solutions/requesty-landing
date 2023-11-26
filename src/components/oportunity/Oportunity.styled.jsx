import styled from "@emotion/styled";
import { mediaSizes } from "../constants/media";

export const SectionWrapper = styled.div`
  font-family: "e-Ukraine-Regular", sans-serif;
  position: relative;
  min-height: 1793px;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 96px;

  background: ${(props) => props.theme.colors.Button};
  display: flex;
  flex-direction: column;
  gap: 64px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-left: 32px;
    padding-right: 32px;
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
