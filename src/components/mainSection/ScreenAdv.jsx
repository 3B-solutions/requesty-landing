import { StickyContent, ScreenWrapper, ScreenBG, ScreenHole, MainSectionSubTitle, MainSectionTxt, TxtLineWrapper, InfoTxt, SummInfo } from "./MainSection.styled";
import Dron from "../img/DronForScreen.png";
import ReportIMG from "../img/ReportIMG.jpg";
import { Button } from "../styled/Button.styled";

const ScreenAdv = () => {
  return (
    <>
      <StickyContent>
        <ScreenWrapper>
          <ScreenBG>
          <ScreenHole></ScreenHole>
          <MainSectionSubTitle>Я збираю</MainSectionSubTitle>
          <MainSectionTxt className="screen">Три дрона DJI Mavic 3 </MainSectionTxt>
          <div>
            <img src={Dron} alt="add" width={"80%"} height={"auto"}/>
          </div>
          <TxtLineWrapper className="center">
              <InfoTxt>Ціль</InfoTxt>
              <SummInfo>264 000 ₴</SummInfo>
            </TxtLineWrapper>
            <Button type="button" className="small">send.monobank.ua</Button>
          </ScreenBG>
        </ScreenWrapper>
        <ScreenWrapper>
          <ScreenBG>
          <ScreenHole></ScreenHole>
          <MainSectionSubTitle>Збір успішно закритий</MainSectionSubTitle>
          <MainSectionTxt className="screen">Три дрона DJI Mavic 3 </MainSectionTxt>
          <div>
            <img src={ReportIMG} alt="add" width={"80%"} height={"auto"}/>
          </div>
          <TxtLineWrapper className="center">
              <InfoTxt>ЗІБРАНО</InfoTxt>
              <SummInfo>264 050 ₴</SummInfo>
            </TxtLineWrapper>
          </ScreenBG>
        </ScreenWrapper>
      </StickyContent>
    </>
  );
};
export default ScreenAdv;
