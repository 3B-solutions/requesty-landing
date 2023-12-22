import {
  DiyaDescr,
  DiyaWrap,
  InfoWrapper,
  SafetyTitle,
  SafetyWrapper,
  UserDescr,
  UserWrap,
  ImgWrap,
} from "./Safety.styled";
import DiyaImg from "../img/Diya.jpg";
import Soldier from "../img/vector-soldier.jpg";
import {
  FundsTexts,
  TitleFunds,
} from "components/oportunity/parts/Funds.styled";
import Volontuer from "../img/vector-volunteer.jpg";
import Donater from "../img/vector-donater.jpg";

const Safety = () => {
  return (
    <SafetyWrapper>
      <SafetyTitle>Безпека та довіра</SafetyTitle>
      <InfoWrapper>
        <DiyaWrap>
          <img src={DiyaImg} alt="DiyaImg" height={128} width={128} />
          <DiyaDescr>
            <TitleFunds>Реєстрація через дію</TitleFunds>
            <FundsTexts>
              Будемо впевненні що до нас доєднуються наші громадяни
            </FundsTexts>
          </DiyaDescr>
        </DiyaWrap>
        <UserWrap>
          <ImgWrap>
            <img src={Soldier} alt="Soldier" height={128} width={128} />
            <UserDescr>Військовий</UserDescr>
          </ImgWrap>
          <DiyaDescr>
            <TitleFunds>Перевіряємо</TitleFunds>
            <FundsTexts>Підтверджуємо актуальність запиту та особу</FundsTexts>
          </DiyaDescr>
        </UserWrap>
        <UserWrap>
          <ImgWrap>
            <img src={Volontuer} alt="Volontuer" height={128} width={128} />
            <UserDescr>Волонтер</UserDescr>
          </ImgWrap>
          <DiyaDescr>
            <TitleFunds>Модеруємо</TitleFunds>
            <FundsTexts>Ознайомлюємось з волонтерською діяльністю</FundsTexts>
          </DiyaDescr>
        </UserWrap>
        <UserWrap>
          <ImgWrap>
            <img src={Donater} alt="Donater" height={128} width={128} />
            <UserDescr>Донатер</UserDescr>
          </ImgWrap>
          <DiyaDescr>
            <TitleFunds>Звітуємо</TitleFunds>
            <FundsTexts>Слідкуємо, щоб звітність була прозора</FundsTexts>
          </DiyaDescr>
        </UserWrap>
      </InfoWrapper>
    </SafetyWrapper>
  );
};
export default Safety;
