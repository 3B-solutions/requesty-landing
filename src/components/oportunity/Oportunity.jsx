import { SectionWrapper, Title } from "./Oportunity.styled";
import Funds from "./parts/Funds";
const Oportunity = () => {
  return (
    <>
      <SectionWrapper>
        <Title>Також ви можете</Title>
        <Funds/>
        {/* <Initiatives/> */}
        {/* <Petitions/> */}
      </SectionWrapper>
    </>
  );
};
export default Oportunity;
