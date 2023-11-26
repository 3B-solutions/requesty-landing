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
  WorkingBtn,
  LableFoot,
  CopyText,
  LableText,
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
              <TextContact>+38066030309</TextContact>
              <TextContact>requestyua@gmail.com</TextContact>
            </InfoMail>
            <WorkingBtn>Співпраця</WorkingBtn>
          </InfoContact>
        </FootInfo>
        <LableFoot>
          <LableText>Requesty</LableText>
          <CopyText>
            Copyright &copy; 2023 Requesty. All rights reserved
          </CopyText>
        </LableFoot>
      </FooterWrapper>
    </>
  );
};
export default Footer;
