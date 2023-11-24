import {
  BunnonsContainer,
  ContentBox,
  ContentBoxWhite,
  StickyContent,
} from "./MainSection.styled";
import Dron from "../img/Dron.png";
import { Button } from "../styled/Button.styled";
const RequestDone = () => {
  return (
    <>
      <StickyContent>
        <ContentBoxWhite>
          <div>
            <h3>Три дрона DJI Mavic 3 </h3>
            <Button className="borderedLight" type="button">
              Дрони
            </Button>
          </div>
          <div>
            <img src={Dron} alt="add" width={"100%"} />
          </div>
          <div>
            <div>
              <p>Зiбранно</p>
              <p>13 200 ₴</p>
              <p>(5%)</p>
            </div>
            <div>
              <p>Ціль</p>
              <p>264 000₴</p>
            </div>
          </div>
          <div>progress line</div>
          <p>
            DJI - Mavic 3! 🚁 Нам життєво необхідно робити скиди. Нажаль
            минулого місяця ми втратили вже 3 штуки через ворожий реб, тому
            потребуємо терміново нові дрони для розвідки та знищення ворогів.
          </p>
          <BunnonsContainer>
            <Button type="button">Донат</Button>
            <Button className="bordered" type="button">
            Поділитись
            </Button>
          </BunnonsContainer>
        </ContentBoxWhite>
        <ContentBox>
          <h3>Волонтер відкриває збір</h3>
          <p>
            Заповниши карточку збору, прописавши ціль та опис відкриває збір на
            платформі
          </p>

        </ContentBox>
      </StickyContent>
    </>
  );
};
export default RequestDone;
