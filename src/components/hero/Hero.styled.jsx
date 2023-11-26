import styled from "@emotion/styled";

export const HeroWrapper = styled.div`
  font-family: "e-Ukraine-Regular", sans-serif;
  position: relative;
`;

export const PageName = styled.p`
  padding-bottom: 16px;
  padding-left: 85px;
  display: flex;
`;

export const ArrowRight = styled.img`
  cursor: pointer;
  position: absolute;
  right: 45px;
  top: 380px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
export const ArrowLeft = styled.img`
  cursor: pointer;
  position: absolute;
  left: 45px;
  top: 380px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
