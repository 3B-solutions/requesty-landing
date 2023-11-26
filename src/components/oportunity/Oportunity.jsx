import { SectionWrapper, Title } from "./Oportunity.styled";
import Funds from "./parts/Funds";
import Inits from "./parts/Initiatives";
import Petitions from "./parts/Petitions";
const Oportunity = () => {
  return (
    <>
      <SectionWrapper id="oportunity">
        <Title>Це ще не все</Title>
        <Funds />
        <Inits />
        <Petitions />
      </SectionWrapper>
    </>
  );
};
export default Oportunity;
