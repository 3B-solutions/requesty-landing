import {
  FundsWrapper,
  FundLook,
  FixedText,
  ScrollableContent,
  FundDescr,
  TextsParag,
  FundsTitle,
  FundsTexts,
  HeadWrap,
  LogoWrap,
  NavWrapper,
  Nav,
  NavSimple,
  MainInfo,
  TitleInfo,
  TextInfo,
  TitleFunds,
  ButtonInfo,
  FundsParts,
  FundList,
  FundPart,
  NameFund,
  ShortDescr,
  StyledFund,
  StyledFundImage,
} from "./Funds.styled";
import logo from "../../img/LOGO green.svg";
import fund from "../../img/fundImg.jpg";

const Funds = () => {
  return (
    <>
      <FundsWrapper>
        <FixedText>
          <FundsTitle>Фонди</FundsTitle>
          <FundsTexts>
            Ми підтримуємо всі фонди та формуватимемо список, щоб більше людей
            знаходило порібні фонди.
          </FundsTexts>
        </FixedText>
        <ScrollableContent>
          <HeadWrap>
            <LogoWrap>
              <StyledFundImage src={logo} alt="logo" />
              <NavWrapper>
                <Nav>
                  <li>Збори</li>
                  <StyledFund>Фонди</StyledFund>
                  <li>Петиції</li>
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
                <TitleFunds>Фонди</TitleFunds>
              </TitleInfo>
              <TextInfo>
                <TextsParag>
                  Якщо ви фонд - долучайтесь до списку,
                  <br />
                  щоб більше людей дізнались про вас
                </TextsParag>
                <ButtonInfo>Доєднатись</ButtonInfo>
              </TextInfo>
            </MainInfo>
          </HeadWrap>
          <FundsParts>
            <FundList>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>{" "}
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
              <FundPart>
                <FundLook>
                  <img src={fund} alt="fund" />
                  <FundDescr>
                    <NameFund>Фонд “Допомога військовим”</NameFund>
                    <ShortDescr>
                      Фонд волонтерів - це некомерційна організація, яка
                      об'єднує волонтерів та залучає їх для виконання...
                    </ShortDescr>
                  </FundDescr>
                </FundLook>
              </FundPart>
            </FundList>
          </FundsParts>
        </ScrollableContent>
      </FundsWrapper>
    </>
  );
};
export default Funds;
