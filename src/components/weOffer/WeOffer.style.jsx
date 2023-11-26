import styled from "@emotion/styled";

export const OfferWrapper = styled.div`
  display: flex;
  gap: 17px;
  padding: 64px 32px 96px;
  background-color: ${(props) => props.theme.colors.BG_Main};
  text-align: start;
`;

export const Poblems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.BG_Secondary};
`;
export const ProblemsList = styled.ol`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ProblemsItem = styled.li`
  display: flex;
  gap: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.32px;
`;
export const ProblemsNumber = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.24px;
  color: ${(props) => props.theme.colors.Button};
`;
export const Title = styled.div`
  display: flex;
  gap: 12px;
`;
export const Offers = styled.h2`
  text-align: center;
`;
export const OffersDescr = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.32px;
`;
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  width: 600px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.BG_Secondary};
`;
