import {
  BunnonsContainer,
  ContentBox,
  ContentBoxWhite,
  GrayBox,
  InfoTxt,
  StickyContent,
  WhiteBox,
  MainSectionSubTitle,
  MainSectionTxt,
  HalfBox,
} from "./MainSection.styled";
import Defender_Small from "../img/vector-soldier.jpg";
import Volunteer_Small from "../img/vector-volunteer.jpg";
import QuestionMark from "../img/QuestionMark.svg";

import { Button } from "../styled/Button.styled";
const FoundVolunteer = () => {
  return (
    <>
      <StickyContent>
        <ContentBoxWhite>
          <MainSectionSubTitle>
            Маєте волонтера, що відгукнувся
          </MainSectionSubTitle>
          <GrayBox>
            <BunnonsContainer>
              <img
                src={Volunteer_Small}
                alt="add"
                width={"40px"}
                height={"40px"}
              />
              <div>
                <InfoTxt>Волонтер</InfoTxt>
                <InfoTxt>Анастасія Кравченко</InfoTxt>
              </div>
              <div>
                <InfoTxt>+38099540980</InfoTxt>
                <InfoTxt>Battery@gmail.com</InfoTxt>
              </div>
            </BunnonsContainer>
            <WhiteBox>
              <img
                src={QuestionMark}
                alt="add"
                width={"24px"}
                height={"24px"}
              />
              <InfoTxt>
                Перед тим як підтвердити, дочекайтесь дзвінка від волонтера або
                зателефонуйте йому самі
              </InfoTxt>
            </WhiteBox>
            <BunnonsContainer>
              <HalfBox>
                <Button type="button">Підтвердити</Button>
              </HalfBox>
              <HalfBox>
                <Button className="bordered" type="button">
                  Відмінити
                </Button>
              </HalfBox>
            </BunnonsContainer>
          </GrayBox>
          <BunnonsContainer>
            <img
              src={Defender_Small}
              alt="add"
              width={"40px"}
              height={"40px"}
            />
            <div>
              <InfoTxt>Військовий</InfoTxt>
              <InfoTxt>Михайло Михайлович</InfoTxt>
            </div>
            <Button className="borderedLight right" type="button">
              Дрони
            </Button>
          </BunnonsContainer>
          <InfoTxt>Відкритий запит</InfoTxt>
          <h4>Три дрона DJI Mavic 3 </h4>
          <InfoTxt>
            DJI - Mavic 3! 🚁 Нам життєво необхідно робити скиди. Нажаль
            минулого місяця ми втратили вже 3 штуки через ворожий реб, тому
            потребуємо терміново нові дрони для розвідки та знищення ворогів.
          </InfoTxt>
          <Button className="bordered" type="button">
            Переглянути запит
          </Button>
        </ContentBoxWhite>
        <ContentBox>
          <MainSectionSubTitle>
            Платформа знаходить потрібного волонтера по категорії
          </MainSectionSubTitle>
          <MainSectionTxt>
            Задача волонтера та військового обговорити деталі, та домовитись про
            співпрацю. У разі успішного діалогу військовий підтвержує роботу з
            конкретним волонтером.
          </MainSectionTxt>
        </ContentBox>
      </StickyContent>
    </>
  );
};
export default FoundVolunteer;
