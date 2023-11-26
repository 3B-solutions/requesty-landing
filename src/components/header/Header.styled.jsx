import styled from "@emotion/styled";

export const HeaderStyled = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 768px;
  padding: 15px;
  opacity: 0.98;
  background-color: ${(props) => props.theme.colors.BG_Secondary};
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
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 29.44px;
`;
export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0.32px;
`;
