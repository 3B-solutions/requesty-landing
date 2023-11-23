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

// .scroll-container {
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   scrollbar-width: thin; /* Задає тонкий скролбар у Firefox */
//   scrollbar-color: transparent transparent; /* Задає тонкий скролбар у Firefox */
//   -ms-overflow-style: none; /* Ховає скролбар у Internet Explorer та Edge */
// }

// .scroll-container::-webkit-scrollbar {
//   width: 12px; /* Задає ширину скролбара для Chrome та Safari */
// }

// .scroll-container::-webkit-scrollbar-thumb {
//   background-color: transparent; /* Задає фон для пальця скролбара для Chrome та Safari */
// }

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
`;
export const StickyContent = styled.div`
  width: 66.66%;
  padding: 16px;
  height: 400px;
`;
export const ContentBox = styled.div`
  display: flex;
  width: 50%;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.BG_Main};
`;
export const InputStyled = styled.input`
  padding: 16px;
  width: 384px;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.BG_Secondary};
`;
