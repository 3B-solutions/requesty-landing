import { InitsWrapper, InitLook, FixedText, ScrollableContent, InitDescr, TextsParag, InitsTitle, InitsTexts, HeadWrap, LogoWrap, NavWrapper, Nav, NavSimple, MainInfo, TitleInfo, TextInfo, TitleInits, ButtonInfo, InitsParts, InitList, InitPart, NameInit, ShortDescr, InitSign } from "./Initiatives.styled";
import logo from "../../img/LOGO green.svg";
import { Button } from "components/styled/Button.styled";
import volunteer from "../../img/Volunteer_Small.png";

const Inits = () => {

  return (
    <>
    <InitsWrapper>
   
      <FixedText>
        <InitsTitle>
        Ініціативи
        </InitsTitle>
        <InitsTexts>
        Волонтери не лише шукають, але й створюють щось. Ми дамо їм можливість розповісти про себе.
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
                    <TitleInits>
                    Ініціативи
                    </TitleInits>
                </TitleInfo>
                <TextInfo>
                    <TextsParag>
                    Нехай всі дізнаються чим ви допомагаєте<br/> 
                    нашим воїнам.
                    </TextsParag>
                        <ButtonInfo>
                        Розмістити ініціативу 
                        </ButtonInfo>
                </TextInfo>
            </MainInfo>
            </HeadWrap>
            <InitsParts>
                <InitList>
                    <InitPart>
                        <InitLook>
                            <InitDescr>
                                <NameInit>Повербанки для ЗСУ</NameInit>
                                <Button className="smallSize" type="button">Перейти</Button>
                            </InitDescr> 
                            <ShortDescr>Внести зміни до Закону України "Про запобігання корупції" щодо видатків на оплату праці найманих працівників для обслуговування домоволодінь та земельних ділянок. А як там, в країнах ЄС? </ShortDescr>
                            <ShortDescr>Автор (ініціатор): Усков Валерій Васильович<br/>Дата оприлюднення: 27 жовтня 2023</ShortDescr>
                            <InitSign>
                                <img src={volunteer} alt="volunteer" height={21} width={21} />
                                <ShortDescr className="smallSize">Волонтер<br/>Анастасія Кравченко</ShortDescr>
                                <ShortDescr className="smallSize">+38099540980<br/>Battery@gmail.com</ShortDescr>
                            </InitSign>                        
                        </InitLook>
                    </InitPart>
                    <InitPart>
                    <InitLook>
                            <InitDescr>
                                <NameInit>Маскувальні сітки</NameInit>
                                <Button className="smallSize" type="button">Перейти</Button>
                            </InitDescr> 
                            <ShortDescr>Внести зміни до Закону України "Про запобігання корупції" щодо видатків на оплату праці найманих працівників для обслуговування домоволодінь та земельних ділянок. А як там, в країнах ЄС? </ShortDescr>
                            <ShortDescr>Автор (ініціатор): Усков Валерій Васильович<br/>Дата оприлюднення: 27 жовтня 2023</ShortDescr>
                            <InitSign>
                                <img src={volunteer} alt="volunteer" height={21} width={21} />
                                <ShortDescr className="smallSize">Волонтер<br/>Анастасія Кравченко</ShortDescr>
                                <ShortDescr className="smallSize">+38099540980<br/>Battery@gmail.com</ShortDescr>
                            </InitSign>                        
                        </InitLook>
                    </InitPart>
                    <InitPart>
                        <InitLook>
                            <InitDescr>
                                <NameInit>Поживні батончики</NameInit>
                                <Button className="smallSize" type="button">Перейти</Button>
                            </InitDescr> 
                            <ShortDescr>Внести зміни до Закону України "Про запобігання корупції" щодо видатків на оплату праці найманих працівників для обслуговування домоволодінь та земельних ділянок. А як там, в країнах ЄС? </ShortDescr>
                            <ShortDescr>Автор (ініціатор): Усков Валерій Васильович<br/>Дата оприлюднення: 27 жовтня 2023</ShortDescr>
                            <InitSign>
                                <img src={volunteer} alt="volunteer" height={21} width={21} />
                                <ShortDescr className="smallSize">Волонтер<br/>Анастасія Кравченко</ShortDescr>
                                <ShortDescr className="smallSize">+38099540980<br/>Battery@gmail.com</ShortDescr>
                            </InitSign>                        
                        </InitLook>
                    </InitPart>
                    <InitPart>
                    <InitLook>
                            <InitDescr>
                                <NameInit>Окопні свічки</NameInit>
                                <Button className="smallSize" type="button">Перейти</Button>
                            </InitDescr> 
                            <ShortDescr>Внести зміни до Закону України "Про запобігання корупції" щодо видатків на оплату праці найманих працівників для обслуговування домоволодінь та земельних ділянок. А як там, в країнах ЄС? </ShortDescr>
                            <ShortDescr>Автор (ініціатор): Усков Валерій Васильович<br/>Дата оприлюднення: 27 жовтня 2023</ShortDescr>
                            <InitSign>
                                <img src={volunteer} alt="volunteer" height={21} width={21} />
                                <ShortDescr className="smallSize">Волонтер<br/>Анастасія Кравченко</ShortDescr>
                                <ShortDescr className="smallSize">+38099540980<br/>Battery@gmail.com</ShortDescr>
                            </InitSign>                        
                        </InitLook>
                    </InitPart>
                    <InitPart>
                        <InitLook>
                            <InitDescr>
                                <NameInit>Повербанки для ЗСУ</NameInit>
                                <Button className="smallSize" type="button">Перейти</Button>
                            </InitDescr> 
                            <ShortDescr>Внести зміни до Закону України "Про запобігання корупції" щодо видатків на оплату праці найманих працівників для обслуговування домоволодінь та земельних ділянок. А як там, в країнах ЄС? </ShortDescr>
                            <ShortDescr>Автор (ініціатор): Усков Валерій Васильович<br/>Дата оприлюднення: 27 жовтня 2023</ShortDescr>
                            <InitSign>
                                <img src={volunteer} alt="volunteer" height={21} width={21} />
                                <ShortDescr className="smallSize">Волонтер<br/>Анастасія Кравченко</ShortDescr>
                                <ShortDescr className="smallSize">+38099540980<br/>Battery@gmail.com</ShortDescr>
                            </InitSign>                        
                        </InitLook>
                    </InitPart>
                    <InitPart>
                    <InitLook>
                            <InitDescr>
                                <NameInit>Маскувальні сітки</NameInit>
                                <Button className="smallSize" type="button">Перейти</Button>
                            </InitDescr> 
                            <ShortDescr>Внести зміни до Закону України "Про запобігання корупції" щодо видатків на оплату праці найманих працівників для обслуговування домоволодінь та земельних ділянок. А як там, в країнах ЄС? </ShortDescr>
                            <ShortDescr>Автор (ініціатор): Усков Валерій Васильович<br/>Дата оприлюднення: 27 жовтня 2023</ShortDescr>
                            <InitSign>
                                <img src={volunteer} alt="volunteer" height={21} width={21} />
                                <ShortDescr className="smallSize">Волонтер<br/>Анастасія Кравченко</ShortDescr>
                                <ShortDescr className="smallSize">+38099540980<br/>Battery@gmail.com</ShortDescr>
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
