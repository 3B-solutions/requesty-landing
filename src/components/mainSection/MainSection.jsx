import {
  BunnonsContainer,
  MainWrapper,
  StickyContainer,
  StickyElement,
} from "./MainSection.styled";
import MakingRequest from "./MakingRequest";
import FoundVolunteer from "./FoundVolunteer";
import RequestDone from "./RequestDone";
import CollaborationConfirmed from "./CollaborationConfirmed";

const MainSection = () => {
  return (
    <MainWrapper>
      <BunnonsContainer>
        <h2>Як це працює</h2>
        <p>Етапи формування та закриття запиту</p>
      </BunnonsContainer>
      <StickyContainer>
        <StickyElement>Sticky Element 1</StickyElement>
        <MakingRequest />
        <StickyElement>Sticky Element 2</StickyElement>
        <FoundVolunteer />
        <StickyElement>Sticky Element 3</StickyElement>
        <CollaborationConfirmed/>
        <StickyElement>Element ??</StickyElement>
        <RequestDone />
      </StickyContainer>
    </MainWrapper>
  );
};
export default MainSection;
