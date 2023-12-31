import {
  PetitsWrapper,
  PetitLook,
  FixedText,
  ScrollableContent,
  PetitDescr,
  TextsParag,
  PetitsTitle,
  PetitsTexts,
  HeadWrap,
  LogoWrap,
  NavWrapper,
  Nav,
  NavSimple,
  MainInfo,
  TitleInfo,
  TextInfo,
  TitlePetits,
  ButtonInfo,
  PetitsParts,
  PetitList,
  PetitPart,
  NamePetit,
  ShortDescr,
  StyledPet,
} from "./Petitions.styled";
import logo from "../../img/LOGO green.svg";
import { Button } from "components/styled/Button.styled";
import { StyledFundImage } from "./Funds.styled";

const Petitions = () => {
  return (
    <>
      <PetitsWrapper>
        <FixedText>
          <PetitsTitle>Петиції</PetitsTitle>
          <PetitsTexts>
            Петиції – важливий інструмент для впливу на державу в багатьох
            сферах. На нашій платформі зібрані петиції повязані з військовими.
          </PetitsTexts>
        </FixedText>
        <ScrollableContent>
          <HeadWrap>
            <LogoWrap>
              <StyledFundImage src={logo} alt="logo" />
              <NavWrapper>
                <Nav>
                  <li>Збори</li>
                  <li>Фонди</li>
                  <StyledPet>Петиції</StyledPet>
                  <li>Ініціативи</li>
                </Nav>
                <NavSimple>
                  <li>Увійти</li>
                  <li>Реєстрація</li>
                </NavSimple>
              </NavWrapper>
            </LogoWrap>
            <MainInfo>
              <TitleInfo>
                <TitlePetits>Петиції</TitlePetits>
              </TitleInfo>
              <TextInfo>
                <TextsParag>
                  Додайте петицію, якщо вона
                  <br />
                  пов’язана з нашими захисниками.
                </TextsParag>
                <ButtonInfo>Додати петицію</ButtonInfo>
              </TextInfo>
            </MainInfo>
          </HeadWrap>
          <PetitsParts>
            <PetitList>
              <PetitPart>
                <PetitLook>
                  <PetitDescr>
                    <NamePetit>№22/209206-еп</NamePetit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </PetitDescr>
                  <ShortDescr>
                    Внести зміни до Закону України "Про запобігання корупції"
                    щодо видатків на оплату праці найманих працівників для
                    обслуговування домоволодінь та земельних ділянок. А як там,
                    в країнах ЄС?{" "}
                  </ShortDescr>
                  <ShortDescr>
                    Автор (ініціатор): Усков Валерій Васильович
                    <br />
                    Дата оприлюднення: 27 жовтня 2023
                  </ShortDescr>
                </PetitLook>
              </PetitPart>
              <PetitPart>
                <PetitLook>
                  <PetitDescr>
                    <NamePetit>№22/209206-еп</NamePetit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </PetitDescr>
                  <ShortDescr>
                    Внести зміни до Закону України "Про запобігання корупції"
                    щодо видатків на оплату праці найманих працівників для
                    обслуговування домоволодінь та земельних ділянок. А як там,
                    в країнах ЄС?{" "}
                  </ShortDescr>
                  <ShortDescr>
                    Автор (ініціатор): Усков Валерій Васильович
                    <br />
                    Дата оприлюднення: 27 жовтня 2023
                  </ShortDescr>
                </PetitLook>
              </PetitPart>
              <PetitPart>
                <PetitLook>
                  <PetitDescr>
                    <NamePetit>№22/209206-еп</NamePetit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </PetitDescr>
                  <ShortDescr>
                    Внести зміни до Закону України "Про запобігання корупції"
                    щодо видатків на оплату праці найманих працівників для
                    обслуговування домоволодінь та земельних ділянок. А як там,
                    в країнах ЄС?{" "}
                  </ShortDescr>
                  <ShortDescr>
                    Автор (ініціатор): Усков Валерій Васильович
                    <br />
                    Дата оприлюднення: 27 жовтня 2023
                  </ShortDescr>
                </PetitLook>
              </PetitPart>
              <PetitPart>
                <PetitLook>
                  <PetitDescr>
                    <NamePetit>№22/209206-еп</NamePetit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </PetitDescr>
                  <ShortDescr>
                    Внести зміни до Закону України "Про запобігання корупції"
                    щодо видатків на оплату праці найманих працівників для
                    обслуговування домоволодінь та земельних ділянок. А як там,
                    в країнах ЄС?{" "}
                  </ShortDescr>
                  <ShortDescr>
                    Автор (ініціатор): Усков Валерій Васильович
                    <br />
                    Дата оприлюднення: 27 жовтня 2023
                  </ShortDescr>
                </PetitLook>
              </PetitPart>
              <PetitPart>
                <PetitLook>
                  <PetitDescr>
                    <NamePetit>№22/209206-еп</NamePetit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </PetitDescr>
                  <ShortDescr>
                    Внести зміни до Закону України "Про запобігання корупції"
                    щодо видатків на оплату праці найманих працівників для
                    обслуговування домоволодінь та земельних ділянок. А як там,
                    в країнах ЄС?{" "}
                  </ShortDescr>
                  <ShortDescr>
                    Автор (ініціатор): Усков Валерій Васильович
                    <br />
                    Дата оприлюднення: 27 жовтня 2023
                  </ShortDescr>
                </PetitLook>
              </PetitPart>
              <PetitPart>
                <PetitLook>
                  <PetitDescr>
                    <NamePetit>№22/209206-еп</NamePetit>
                    <Button className="smallSize" type="button">
                      Перейти
                    </Button>
                  </PetitDescr>
                  <ShortDescr>
                    Внести зміни до Закону України "Про запобігання корупції"
                    щодо видатків на оплату праці найманих працівників для
                    обслуговування домоволодінь та земельних ділянок. А як там,
                    в країнах ЄС?{" "}
                  </ShortDescr>
                  <ShortDescr>
                    Автор (ініціатор): Усков Валерій Васильович
                    <br />
                    Дата оприлюднення: 27 жовтня 2023
                  </ShortDescr>
                </PetitLook>
              </PetitPart>
            </PetitList>
          </PetitsParts>
        </ScrollableContent>
      </PetitsWrapper>
    </>
  );
};
export default Petitions;
