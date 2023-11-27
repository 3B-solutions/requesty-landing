import styled from "@emotion/styled";
import { mediaSizes } from "../constants/media";

export const PageImage = styled.img`
  width: 100%;
  height: auto;
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 1144px;
  }
`;
