import { BunnonsContainer, ContentBox, ContentBoxWhite, GrayBox, InfoTxt, StickyContent, WhiteBox } from "./MainSection.styled";
import Defender_Small from "../img/Defender_Small.png";
import Volunteer_Small from "../img/Volunteer_Small.png";
import QuestionMark from "../img/QuestionMark.svg";

import { Button } from "../styled/Button.styled";
const FoundVolunteer = () => {
  return (
    <>
                <StickyContent>
          <ContentBoxWhite>
            <h3>Маєте волонтера, що відгукнувся</h3>
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
                  width={"40px"}
                  height={"40px"}
                />
                <p>
                  Перед тим як підтвердити, дочекайтесь дзвінка від волонтера
                  або зателефонуйте йому самі
                </p>
              </WhiteBox>
              <BunnonsContainer>
                <Button type="button">Підтвердити</Button>
                <Button className="bordered" type="button">
                  Відмінити
                </Button>
              </BunnonsContainer>
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
              DJI - Mavic 3! 🚁 Нам життєво необхідно робити скиди. Нажаль минулого місяця ми втратили
              вже 3 штуки через ворожий реб, тому потребуємо терміново нові дрони для розвідки та знищення ворогів.
            </p>
            <Button className="bordered" type="button">
              Переглянути запит
            </Button>
          </ContentBoxWhite>
          <ContentBox>
            <h3>Платформа знаходить потрібного волонтера по категорії</h3>
            <p>
              Задача волонтера та військового проговори всі нюанси потреби, та
              домовитись про спів праці. У разі успішного діалогу військовий
              підтвержує роботу з конкретним волонтером
            </p>
          </ContentBox>
        </StickyContent>
    </>
  );
};
export default FoundVolunteer;
