import React, { useEffect, useRef } from "react";
import CollaborationConfirmed from "./CollaborationConfirmed";
import FoundVolunteer from "./FoundVolunteer";
import {
  InfoTxt,
  MainSectionInfo,
  MainSectionTitle,
  MainWrapper,
  StickyContainer,
  StickyElement,
  StickyElementBox,
  StickyElementTxt,
  StickyElementWrapper,
  TitleWrapper,
} from "./MainSection.styled";
import MakingRequest from "./MakingRequest";
import RequestDone from "./RequestDone";
import ScreenAdv from "./ScreenAdv";
import Defender_Small from "../img/Defender_Small.png";
import Volunteer_Small from "../img/Volunteer_Small.png";
import Donater_Small from "../img/Donater_Small.png";

const MainSection = () => {
  return (
    <MainWrapper>
      <TitleWrapper>
        <MainSectionTitle>Як це працює</MainSectionTitle>
        <MainSectionInfo>Етапи формування та закриття запиту</MainSectionInfo>
      </TitleWrapper>
      <StickyContainer>
        <StickyElement>
          <StickyElementWrapper style={{ marginBottom: "248px" }}>
            <img
              src={Defender_Small}
              alt="add"
              width={"64px"}
              height={"64px"}
            />
            <StickyElementBox>
              <InfoTxt>Військовий</InfoTxt>
              <StickyElementTxt>
                Привіт, нам дуже потрібні 3 дрона.
              </StickyElementTxt>
            </StickyElementBox>
          </StickyElementWrapper>
        </StickyElement>
        <MakingRequest />
        <StickyElement>
          <p> </p>
        </StickyElement>
        <FoundVolunteer />
        <StickyElement className="secondEl">
          <StickyElementWrapper style={{ marginBottom: "135px" }}>
            <StickyElementBox>
              <InfoTxt>Волонтер</InfoTxt>
              <StickyElementTxt>
                Я організую, покладись на мене.
              </StickyElementTxt>
            </StickyElementBox>
            <img
              src={Volunteer_Small}
              alt="add"
              width={"64px"}
              height={"64px"}
            />
          </StickyElementWrapper>
        </StickyElement>
        <CollaborationConfirmed />
        <StickyElement className="thirdEl">
          <StickyElementWrapper>
            <img src={Donater_Small} alt="add" width={"64px"} height={"64px"} />
            <StickyElementBox>
              <InfoTxt>Донатер</InfoTxt>
              <StickyElementTxt>
                Я підтримую збір репостом та донатом!
              </StickyElementTxt>
            </StickyElementBox>
          </StickyElementWrapper>
        </StickyElement>
        <RequestDone />
        <StickyElement>
          <p> </p>
        </StickyElement>
        <ScreenAdv />
      </StickyContainer>
    </MainWrapper>
  );
};
export default MainSection;
