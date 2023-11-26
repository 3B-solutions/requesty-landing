import {
  FooterWrapper,
  FootImg,
  FootInfo,
  InfoPartner,
  TextPartner,
  InfoContact,
  TextInfo,
  TextContact,
  InfoMail,
  LableFoot,
  CopyText,
} from "./Footer.styled";
import FooterImg from "../img/FooterImg.png";
const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FootImg src={FooterImg} />
        <FootInfo>
          <InfoPartner>
            <TextPartner>
              Ми шукаємо{"\n"}
              партнерів
            </TextPartner>
          </InfoPartner>
          <InfoContact>
            <TextInfo>
              Шукаємо тих кому не байдужа доля країни і хто готовий розвивати
              {"\n"}
              нашу платформу.
            </TextInfo>
            <InfoMail>
              <TextContact>+380634347244</TextContact>
              <TextContact>requestyua@gmail.com</TextContact>
            </InfoMail>
          </InfoContact>
        </FootInfo>
        <LableFoot>
          <CopyText>
            Copyright &copy; 2023 Requesty. All rights reserved
          </CopyText>
        </LableFoot>
      </FooterWrapper>
    </>
  );
};
export default Footer;
