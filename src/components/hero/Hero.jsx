import MainPage from "../pagesPreview/mainPage/MainPage";
import { HeroWrapper, PageName, ArrowRight, ArrowLeft } from "./Hero.styled";
import FrameRight from "../img/FrameRight.svg";
import FrameLeft from "../img/FrameLeft.svg";
const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <PageName>*головна сторінка</PageName>
        <ArrowRight src={FrameRight} alt="arrow right" />
        <ArrowLeft src={FrameLeft} alt="arrow left" />
        <MainPage />
      </HeroWrapper>
    </>
  );
};
export default Hero;
