import React from "react";
import CollaborationConfirmed from "./CollaborationConfirmed";
import FoundVolunteer from "./FoundVolunteer";
import {
  InfoTxt,
  MainSectionInfo,
  MainSectionTitle,
  MainWrapper,
  StickyContainer,
  StickyElMobile,
  StickyElement,
  StickyElementBox,
  StickyElementTxt,
  StickyElementWrapper,
  StickyIMGThumb,
  TitleWrapper,
} from "./MainSection.styled";
import MakingRequest from "./MakingRequest";
import RequestDone from "./RequestDone";
import ScreenAdv from "./ScreenAdv";
import Defender_Small from "../img/vector-soldier.jpg";
import Volunteer_Small from "../img/vector-volunteer.jpg";
import Donater_Small from "../img/vector-donater.jpg";

const MainSection = () => {
  return (
    <MainWrapper id="howitworks">
      <TitleWrapper>
        <MainSectionTitle>Як це працює</MainSectionTitle>
        <MainSectionInfo>Етапи формування та закриття запиту</MainSectionInfo>
      </TitleWrapper>
      <StickyContainer>
        <StickyElement>
          <StickyElementWrapper className="first">
            <StickyIMGThumb>
              <img
                src={Defender_Small}
                alt="add"
                width={"100%"}
                height={"100%"}
              />
            </StickyIMGThumb>
            <StickyElementBox>
              <InfoTxt>Військовий</InfoTxt>
              <StickyElementTxt>
                Привіт, нам дуже потрібні 3 дрона.
              </StickyElementTxt>
            </StickyElementBox>
          </StickyElementWrapper>
        </StickyElement>
        <MakingRequest />
        <StickyElement className="desktop">
          <p> </p>
        </StickyElement>
        <FoundVolunteer />
        <StickyElement className="secondEl">
          <StickyElementWrapper className="second">
            <StickyElementBox>
              <InfoTxt>Волонтер</InfoTxt>
              <StickyElementTxt>
                Я організую, покладись на мене.
              </StickyElementTxt>
            </StickyElementBox>
            <StickyIMGThumb>
              <img
                src={Volunteer_Small}
                alt="add"
                width={"100%"}
                height={"100%"}
              />
            </StickyIMGThumb>
          </StickyElementWrapper>
        </StickyElement>
        <CollaborationConfirmed />
        <StickyElement className="thirdEl">
          <StickyElementWrapper>
            <StickyIMGThumb>
              <img
                src={Donater_Small}
                alt="add"
                width={"100%"}
                height={"100%"}
              />
            </StickyIMGThumb>
            <StickyElementBox>
              <InfoTxt>Донатер</InfoTxt>
              <StickyElementTxt>
                Я підтримаю збір донатом та поширю!
              </StickyElementTxt>
            </StickyElementBox>
          </StickyElementWrapper>
        </StickyElement>
        <RequestDone />
        <StickyElMobile className="thirdEl">
          <StickyElementWrapper>
            <StickyIMGThumb>
              <img
                src={Donater_Small}
                alt="add"
                width={"100%"}
                height={"100%"}
              />
            </StickyIMGThumb>
            <StickyElementBox>
              <InfoTxt>Донатер</InfoTxt>
              <StickyElementTxt>
                Я підтримаю збір донатом та поширю!
              </StickyElementTxt>
            </StickyElementBox>
          </StickyElementWrapper>
        </StickyElMobile>
        <StickyElement className="desktop">
          <p> </p>
        </StickyElement>
        <ScreenAdv />
      </StickyContainer>
    </MainWrapper>
  );
};
export default MainSection;
