import styled from "@emotion/styled";
import { mediaSizes } from "components/constants/media";

export const MainWrapper = styled.div`
  width: 100%;
  padding: 64px 32px 94px 32px;
  background-color: ${(props) => props.theme.colors.BG_Secondary};
  position: -webkit-sticky;
  position: sticky;
  top: -52px;
  @media screen and (max-width: ${mediaSizes.tablet}) {
    padding: 24px 8px;
    position: static;
  }
  @media screen and (max-width: ${mediaSizes.tabletL}) {
    padding: 32px 16px;
    position: -webkit-sticky;
    top: -72px;
    position: sticky;
  }
`;
export const StickyWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.BG_Secondary};
  position: -webkit-sticky;
  position: sticky;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  margin-bottom: 64px;
  @media screen and (max-width: ${mediaSizes.tabletS}) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    gap: 24px;
    margin-bottom: 32px;
  }
`;

export const MainSectionTitle = styled.h2`
  width: 33.33%;
  text-align: left;
  font-size: 32px;
  font-weight: 400;
  line-height: 92%;
  @media screen and (max-width: ${mediaSizes.tabletS}) {
    font-size: 28px;
    text-align: center;
    width: 100%;
  }
`;
export const MainSectionSubTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  @media screen and (max-width: ${mediaSizes.tabletS}) {
    font-size: 20px;
  }
`;

export const MainSectionTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.32px;
  &.screen {
    margin-top: 32px;
    margin-bottom: 8px;
  }
  @media screen and (max-width: ${mediaSizes.tabletS}) {
    font-size: 14px;
  }
`;
export const MainSectionInfo = styled.p`
  display: block;
  width: 224px;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: 0.2px;
  @media screen and (max-width: ${mediaSizes.tabletS}) {
    font-size: 20px;
    text-align: center;
    width: 100%;
  }
`;
export const SummInfo = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: 0.2px;
`;

export const StickyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const StickyElement = styled.div`
  width: 30%;
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  font-size: 20px;
  margin-bottom: 32px;
  height: fit-content;
  padding-right: 16px;
  &.secondEl {
    top: 140px;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 174px;
    }
    @media screen and (max-width: ${mediaSizes.tabletL}) {
      top: 174px;
    }
    @media screen and (min-width: ${mediaSizes.desktopS}) {
      top: 178px;
    }
  }
  &.thirdEl {
    top: 280px;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 320px;
    }
    @media screen and (max-width: ${mediaSizes.tabletL}) {
      top: 284px;
    }
    @media screen and (min-width: ${mediaSizes.desktopS}) {
      top: 280px;
    }
  }
  @media screen and (max-width: ${mediaSizes.tabletS}) {
    width: 100%;
    position: static;
    margin-bottom: 12px;
    padding-right: 4px;
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    width: 40%;
    position: -webkit-sticky;
    position: sticky;
    margin-bottom: 12px;
  }
`;

export const StickyElementTxt = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.32px;

  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;

  width: 100%;

  background-color: ${(props) => props.theme.colors.Button};

  @media screen and (max-width: ${mediaSizes.tabletS}) {
    width: 160px;
    padding: 8px;
    font-size: 14px;
    line-height: 125%;
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    width: 200px;
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    width: 136px;
    padding: 12px;
    font-size: 14px;
    line-height: 125%;
  }
`;

export const StickyElementWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  justify-content: start;
  &.first {
    margin-bottom: 248px;
    @media screen and (max-width: ${mediaSizes.tabletS}) {
      margin-bottom: 0;
    }
  }
  &.second {
    margin-bottom: 135px;
    @media screen and (max-width: ${mediaSizes.tabletS}) {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    gap: 8px;
  }
`;

export const StickyElementBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
  /* !!!!!!!!!!!!!!!!!!! */
  width: calc(100% - 124px);
  @media screen and (max-width: ${mediaSizes.tabletS}) {
    gap: 4px;
    width: calc(100% - 72px);
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    gap: 4px;
    width: calc(100% - 80px);
  }
  @media screen and (max-width: ${mediaSizes.tabletL}) {
    gap: 4px;
    width: calc(100% - 92px);
  }
`;

export const StickyIMGThumb = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 8px;
  overflow: hidden;
  @media screen and (max-width: ${mediaSizes.tabletS}) {
    width: 64px;
    height: 64px;
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    width: 72px;
    height: 72px;
  }
  @media screen and (max-width: ${mediaSizes.tabletL}) {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: ${mediaSizes.desktopS}) {
    width: 92px;
    height: 92px;
  }
`;

export const StickyContent = styled.div`
  display: flex;
  width: 70%;
  height: fit-content;
  gap: 16px;
  padding-bottom: 32px;
  @media screen and (max-width: ${mediaSizes.tabletS}) {
    width: 100%;
    flex-direction: column;
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    width: 60%;
    flex-direction: column;
  }
`;
export const ContentBox = styled.div`
  display: flex;
  width: 40%;
  padding: 0 32px;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  text-align: left;
  height: fit-content;
  @media screen and (max-width: ${mediaSizes.tablet}) {
    width: 100%;
    padding: 0 12px;
  }
  @media screen and (max-width: ${mediaSizes.tabletL}) {
    padding: 0 16px;
  }
`;

export const ContentBoxWhite = styled.div`
  display: flex;
  width: 60%;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.BG_Main};
  height: fit-content;
  &.last {
    background: ${(props) => props.theme.colors.BG_Secondary};
    flex-direction: row;
    @media screen and (max-width: ${mediaSizes.mobileL}) {
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: ${mediaSizes.tablet}) {
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    }
    @media screen and (max-width: ${mediaSizes.tabletL}) {
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
    }
    @media screen and (min-width: ${mediaSizes.tabletL}) {
      padding: 4px;
      gap: 8px;
    }
    @media screen and (min-width: ${mediaSizes.desktopS}) {
      padding: 8px;
      gap: 12px;
    }
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    width: 100%;
  }
`;

export const InputStyled = styled.input`
  padding: 16px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.BG_Secondary};

  &::placeholder {
    color: ${(props) => props.theme.colors.Button};
    font-size: 12px;
    font-weight: 400;
    line-height: 150%; /* 18px */
    letter-spacing: 0.24px;
  }
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
    transform: scale(1.1);
  }
`;
export const BunnonsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;
  text-align: left;
  width: 100%;
`;

export const TxtLineWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  text-align: left;

  &.right {
    text-align: right;
    margin-left: auto;
  }
  &.center {
    width: 100%;
    justify-content: center;
    text-align: center;
    margin-bottom: 24px;
  }
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
  &.row {
    flex-direction: row;
  }
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
export const HalfBox = styled.div`
  width: 50%;
`;

export const InfoTxt = styled.p`
  color: ${(props) => props.theme.colors.Text_Main};
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-align: left;
`;

export const ScreenWrapper = styled.div`
  /* display: flex;
  gap: 16px; */
  background-color: ${(props) => props.theme.colors.White};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.Button};
  width: 216px;
  height: 400px;
  padding: 10px;
`;

export const ScreenBG = styled.div`
  background-color: ${(props) => props.theme.colors.BG_Secondary};
  border-radius: 16px;
  width: 100%;
  height: 100%;
  padding-top: 12px;
`;

export const ScreenHole = styled.div`
  background-color: ${(props) => props.theme.colors.White};
  border-radius: 8px;
  width: 50px;
  height: 12px;
  margin: 0 auto;
  margin-bottom: 32px;
`;
export const ProgressLine = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.BG_Secondary};
  height: 8px;
  width: 100%;
  border-radius: 4px;
`;

export const ProgressLineFill = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.Button};
  height: 8px;
  width: 10%;
  border-radius: 4px;
  top: 0;
  left: 0;
`;