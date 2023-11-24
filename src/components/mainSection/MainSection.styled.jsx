import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100%;
  padding: 64px 32px 94px 32px;
  background-color: ${(props) => props.theme.colors.BG_Secondary};
  width: 100%;
  /* height: 100vh; */
  /* overflow-y: scroll;
  position: relative; */
`;

export const StickyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none;

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none;

  /* Додає кастомний скролбар для Firefox */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const StickyElement = styled.div`
  width: 33.33%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 50px;
  font-size: 20px;
  margin-bottom: 32px;
  height: fit-content;
`;
export const StickyContent = styled.div`
  display: flex;
  width: 66.66%;
  padding: 16px;
  height: fit-content;
`;
export const ContentBox = styled.div`
  display: flex;
  width: 50%;
  padding: 16px;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  text-align: left;
  height: fit-content;
`;

export const ContentBoxWhite = styled.div`
  display: flex;
  width: 50%;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.BG_Main};
  height: fit-content;
`;

export const InputStyled = styled.input`
  padding: 16px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.BG_Secondary};
`;

export const BorderedBox = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 18px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.Text_Main};
`;
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0px;
  color: ${(props) => props.theme.colors.White};
  font-size: 100%;
  line-height: 1.15;
  border: none;
  cursor: pointer;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    cursor: zoom-in;
  }
`;
export const BunnonsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: baseline;
`;
export const GrayBox = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.BG_Secondary};
`;
export const WhiteBox = styled.div`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.White};
`;

export const InfoTxt = styled.p`
  color: ${(props) => props.theme.colors.Text_Main};
  font-family: e-Ukraine;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: 0.24px;
`;
