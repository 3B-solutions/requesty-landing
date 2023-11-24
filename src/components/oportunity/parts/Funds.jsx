import { FundsWrapper, FixedText, ScrollableContent, TextsParag, FundsTitle, FundsTexts, LogoWrap, NavWrapper, Nav, NavSimple, MainInfo, TitleInfo, TextInfo, TitleFunds, ButtonInfo, FundsParts } from "./Funds.styled";
import logo from "../../img/LOGO green.svg";

const Funds = () => {

  return (
    <>
    <FundsWrapper>
      <FixedText>
        <FundsTitle>
            Фонди
        </FundsTitle>
        <FundsTexts>
            Ми підтримую всі фонди та формуватимемо спосик, щоб більше людей знаходило ті фонди які потрібні.
        </FundsTexts>
      </FixedText>
      <ScrollableContent>
            <LogoWrap>
            <img src={logo} alt="logo" height={18} width={93} />
            <NavWrapper>
                <Nav>
                    <li>Збори</li>
                    <li>Фонди</li>
                    <li>Петиції</li>
                    <li>Волонтери</li>
                    <li>Ініціативи</li>
                    <li>Мої запити</li>
                </Nav>
                <NavSimple>
                    <li>Увійти</li>
                    <li>Реєстрація</li>
                </NavSimple>
            </NavWrapper>
            </LogoWrap>
            <MainInfo>
                <TitleInfo>
                    <TitleFunds>
                    Фонди
                    </TitleFunds>
                </TitleInfo>
                <TextInfo>
                    <TextsParag>
                        Якщо ви фонд долучайтесь до списку.<br/> 
                        Щоб більше людей дізнались про вас
                    </TextsParag>
                        <ButtonInfo>
                            Доєднатись
                        </ButtonInfo>
                </TextInfo>
            </MainInfo>
            <FundsParts>
                <Nav>
                    <li>Збори</li>
                    <li>Фонди</li>
                    <li>Петиції</li>
                    <li>Волонтери</li>
                    <li>Ініціативи</li>
                    <li>Мої запити</li>
                </Nav>
            </FundsParts>
      </ScrollableContent>
      </FundsWrapper>
    </>
  );
};
export default Funds;
