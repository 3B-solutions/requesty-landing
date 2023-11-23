import styled from "@emotion/styled";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;
  margin-bottom: 32px;
`;

export const MainWrapper = styled.div`
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
`;

export const StickyElement = styled.div`
  flex-grow: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 50px;
  font-size: 20px;
  margin-bottom: 32px;
`;
export const StickyContent = styled.div`
  flex-grow: 3;
  padding: 16px;
  height: 400px;
`;
export const ContentBox = styled.div`
  display: flex;
  width: 448px;
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
