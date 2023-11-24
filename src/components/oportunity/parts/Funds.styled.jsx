import styled from "@emotion/styled";

export const FundsWrapper = styled.div`
  font-family: "e-Ukraine-Regular", sans-serif;
  position: relative;
  min-width: 1376px; 
  min-height: 487px;
  margin: 0 auto; 
  padding-top: 34px;
  padding-bottom: 0px;
  padding-left: 32px;
  padding-right: 147px;
  border-radius: 16px;
  background: #ECEEF2;
  display: flex; 
  flex-direction: row;
`;

export const FixedText = styled.div`
  width: 317px; 
  background-color: #f0f0f0;
  display: inline-flex;
  margin-bottom: 32px;
  margin-right: 124px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 16px;
`;

export const FundsTitle = styled.h2`
  color: ${props => props.theme.colors.Text_Main};
  font-size: 24px;
    font-style: normal;
    font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.96px;
  text-align: flex-start;
`;

export const FundsTexts = styled.p`
  color: ${props => props.theme.colors.Text_Main};
  font-size: 16px;
font-style: normal;
font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.32px;
  text-align: start;
`;

export const ScrollableContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden; 
  padding-top: 16.8px;
  padding-bottom: 0px;
  padding-left: 16.8px;
  padding-right: 16.8px;
  width: 756px;
    min-height: 451.5px;
    max-height: 451.5px;
    flex-shrink: 0;
    border-radius: 8px 8px 0px 0px;
    border: 1px solid ${props => props.theme.colors.White};
    background: ${props => props.theme.colors.White};

    &::-webkit-scrollbar {
        width: 12px; /* Ширина повзунка */
      }
    
      &::-webkit-scrollbar-thumb {
        background-color: transparent; /* Колір повзунка */
      }
    
      &::-webkit-scrollbar-track {
        background-color: transparent; /* Колір фону повзунка */
      }
`;

export const LogoWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 13.2px;
    gap: 130px;
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 33.6px;
`;

export const Nav = styled.ul`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  gap: 16px;
  line-height: 18px;
  letter-spacing: 0.24px;
  position: relative;

  &::after {
    content: "";
    width: 0.525px;
    height: 21px;
    background: #D9D9D9;
    position: absolute;
    right: -16.8px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const NavSimple = styled.ul`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  gap: 16px;
  line-height: 18px;
  letter-spacing: 0.24px;
  position: relative;

`;

export const MainInfo = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 170px;
`;

export const TitleInfo = styled.div`
    align-items: flex-start;
    justify-content: flex-start;
`;

export const TitleFunds = styled.h2`
  color: ${props => props.theme.colors.Text_Main};
  font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 44.16px;
    letter-spacing: -0.96px;
`;

export const TextInfo = styled.div`
    display: flex; 
    flex-direction: column;
    max-width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    height: 26px;
`;

export const TextsParag = styled.p`
    max-width: 100%; 
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
    padding: 0; 
    margin-bottom: 16px;   
`

export const ButtonInfo = styled.button`
    display: inline-flex;
    padding: 8.4px 16.8px;
    cursor: pointer;
    gap: 5.25px;
    border-radius: 4.2px;
    border: 0.525px solid ${props => props.theme.colors.Text_Main};
    background: ${props => props.theme.colors.Text_Main};
    color: ${props => props.theme.colors.BG_Main};
    font-size: 8px;
    font-style: normal;
    line-height: 18px;
    letter-spacing: 0.24px;
`

export const FundsParts = styled.div`
    margin-top: 80px;
    flex-grow: 1;
    height: 693.525px;
    flex-shrink: 0;
    background: #ECEEF2;
`