import {
  InitsWrapper,
  InitLook,
  FixedText,
  ScrollableContent,
  InitDescr,
  TextsParag,
  InitsTitle,
  InitsTexts,
  HeadWrap,
  LogoWrap,
  NavWrapper,
  Nav,
  NavSimple,
  MainInfo,
  TitleInfo,
  TextInfo,
  TitleInits,
  ButtonInfo,
  InitsParts,
  InitList,
  InitPart,
  NameInit,
  ShortDescr,
  InitSign,
  StyledInit,
} from "./Initiatives.styled";
import logo from "../../img/LOGO green.svg";
import { Button } from "components/styled/Button.styled";

const Inits = () => {
  return (
    <>
      <InitsWrapper>
        <FixedText>
          <InitsTitle>Ініціативи</InitsTitle>
          <InitsTexts>
            Волонтери не лише шукають, але й створюють щось. Ми дамо їм
            можливість розповісти про себе.
          </InitsTexts>
        </FixedText>
        <ScrollableContent>
          <HeadWrap>
            <LogoWrap>
              <img src={logo} alt="logo" height={18} width={93} />
              <NavWrapper>
                <Nav>
                  <li>Збори</li>
                  <li>Фонди</li>
                  <li>Петиції</li>
                  <StyledInit>Ініціативи</StyledInit>
                </Nav>
                <NavSimple>
                  <li>Увійти</li>
                  <li>Реєстрація</li>
                </NavSimple>
              </NavWrapper>
            </LogoWrap>
            <MainInfo>
              <TitleInfo>
                <TitleInits>Ініціативи</TitleInits>
              </TitleInfo>
              <TextInfo>
                <TextsParag>
                  Нехай всі дізнаються чим ви допомагаєте нашим воїнам.
                </TextsParag>
                <ButtonInfo>Розмістити ініціативу</ButtonInfo>
              </TextInfo>
            </MainInfo>
          </HeadWrap>
          <InitsParts>
            <InitList>
              <InitPart>
                <InitLook>
                  <InitDescr>
                    <NameInit>Повербанки для ЗСУ</NameInit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </InitDescr>
                  <ShortDescr>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ShortDescr>
                  <InitSign>
                    <ShortDescr className="smallSize">
                      Костя Васильович
                    </ShortDescr>
                    <ShortDescr className="smallSize">+38099540980</ShortDescr>
                    <ShortDescr className="smallSize">
                      email@gmail.com
                    </ShortDescr>
                  </InitSign>
                </InitLook>
              </InitPart>
              <InitPart>
                <InitLook>
                  <InitDescr>
                    <NameInit>Маскувальні сітки</NameInit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </InitDescr>
                  <ShortDescr>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ShortDescr>
                  <InitSign>
                    <ShortDescr className="smallSize">
                      Валерія Олександрівна
                    </ShortDescr>
                    <ShortDescr className="smallSize">+38099540980</ShortDescr>
                    <ShortDescr className="smallSize">
                      email@gmail.com
                    </ShortDescr>
                  </InitSign>
                </InitLook>
              </InitPart>
              <InitPart>
                <InitLook>
                  <InitDescr>
                    <NameInit>Поживні батончики</NameInit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </InitDescr>
                  <ShortDescr>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ShortDescr>
                  <InitSign>
                    <ShortDescr className="smallSize">
                      Віктор Андрійович
                    </ShortDescr>
                    <ShortDescr className="smallSize">+38099540980</ShortDescr>
                    <ShortDescr className="smallSize">
                      email@gmail.com
                    </ShortDescr>
                  </InitSign>
                </InitLook>
              </InitPart>
              <InitPart>
                <InitLook>
                  <InitDescr>
                    <NameInit>Окопні свічки</NameInit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </InitDescr>
                  <ShortDescr>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ShortDescr>
                  <InitSign>
                    <ShortDescr className="smallSize">
                      Вадим Богданович
                    </ShortDescr>
                    <ShortDescr className="smallSize">+38099540980</ShortDescr>
                    <ShortDescr className="smallSize">
                      email@gmail.com
                    </ShortDescr>
                  </InitSign>
                </InitLook>
              </InitPart>
              <InitPart>
                <InitLook>
                  <InitDescr>
                    <NameInit>Тушонка для воїнів</NameInit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </InitDescr>
                  <ShortDescr>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ShortDescr>
                  <InitSign>
                    <ShortDescr className="smallSize">
                      Лариса Анатоліївна
                    </ShortDescr>
                    <ShortDescr className="smallSize">+38099540980</ShortDescr>
                    <ShortDescr className="smallSize">
                      email@gmail.com
                    </ShortDescr>
                  </InitSign>
                </InitLook>
              </InitPart>
              <InitPart>
                <InitLook>
                  <InitDescr>
                    <NameInit>Паяю FPV</NameInit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </InitDescr>
                  <ShortDescr>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ShortDescr>
                  <InitSign>
                    <ShortDescr className="smallSize">
                      Дмитро Дмитрович
                    </ShortDescr>
                    <ShortDescr className="smallSize">+38099540980</ShortDescr>
                    <ShortDescr className="smallSize">
                      email@gmail.com
                    </ShortDescr>
                  </InitSign>
                </InitLook>
              </InitPart>
            </InitList>
          </InitsParts>
        </ScrollableContent>
      </InitsWrapper>
    </>
  );
};
export default Inits;
