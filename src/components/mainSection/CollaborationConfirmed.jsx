import {
  BunnonsContainer,
  ContentBox,
  ContentBoxWhite,
  GrayBox,
  InfoTxt,
  StickyContent,
  WhiteBox,
} from "./MainSection.styled";
import Defender_Small from "../img/Defender_Small.png";
import Volunteer_Small from "../img/Volunteer_Small.png";
import DoneMark from "../img/DoneMark.svg";

import { Button } from "../styled/Button.styled";
const CollaborationConfirmed = () => {
  return (
    <>
      <StickyContent>
        <ContentBoxWhite>
          <GrayBox>
            <img src={DoneMark} alt="add" width={"40px"} height={"40px"} />
            <p>Співпраця підтверджена можете починати збір. Успіхів.</p>
          </GrayBox>
          <div>
            <img
              src={Defender_Small}
              alt="add"
              width={"40px"}
              height={"40px"}
            />
            <div>
              <p>Військовий</p>
              <p>Михайло Михайлович</p>
            </div>
            <Button className="borderedLight" type="button">
              Дрони
            </Button>
          </div>
          <p>Відкритий запит</p>
          <h4>Три дрона DJI Mavic 3 </h4>
          <p>
            DJI - Mavic 3! 🚁 Нам життєво необхідно робити скиди. Нажаль
            минулого місяця ми втратили вже 3 штуки через ворожий реб, тому
            потребуємо терміново нові дрони для розвідки та знищення ворогів.
          </p>
          <Button className="bordered" type="button">
            Переглянути запит
          </Button>
        </ContentBoxWhite>
        <ContentBox>
          <h3>Військовий підтвердив співпрацю</h3>
          <p>
            Волонтер отримає сповіщення про підтвердження та може переходити до
            створення збору.
          </p>
        </ContentBox>
      </StickyContent>
    </>
  );
};
export default CollaborationConfirmed;
