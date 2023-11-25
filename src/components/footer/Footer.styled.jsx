import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  font-family: "e-Ukraine-Regular", sans-serif;
  position: relative;
  max-width: 1440px; 
  height: 906px;
  margin: 0 auto; 
  padding-top: 64px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
  background: ${props => props.theme.colors.Text_Main};
  display: flex; 
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 64px;
`;

export const FootImg = styled.img`
  max-width: 100%;
`;

export const FootInfo = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 364px;
`;

export const InfoPartner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 364px;
`

export const TextPartner = styled.p`
  width: 332px;
  color: ${props => props.theme.colors.White};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  white-space: pre-line;
  text-align: left;
`

export const InfoContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`
export const TextInfo = styled.p`
  color: ${props => props.theme.colors.White};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.24px;
  white-space: pre-line;
  text-align: left;
`

export const InfoMail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 64px;
`

export const TextContact = styled.p`
  color: ${props => props.theme.colors.White};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.2px;
`
export const WorkingBtn = styled.button`
  display: flex;
  width: 200px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.White};
  background: ${props => props.theme.colors.White};

  color: ${props => props.theme.colors.Text_Main};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.24px;

    &:hover {
        animation: jelly 0.5s;
        background: ${props => props.theme.colors.Light_Gray_2};
      }
`

export const LableFoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 364px;
`

export const CopyText = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.White};
  font-size: 14px;
`;

export const LableText = styled.p`
  color: ${props => props.theme.colors.White};
  font-size: 14px;
  width: 332px;
  text-align: left;
`;