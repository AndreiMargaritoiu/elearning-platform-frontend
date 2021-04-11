import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledMentoringPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 48px;
  padding: 24px;
  background-color: ${color.light.tertiary};

  @media ${queries.tablet} {
    margin: 0 24px;
    padding: 16px;
  }

  @media ${queries.mobile} {
    margin: 0 16px;
    flex-direction: column;
    justify-content: start;
  }
`;

export const StyledMentoringOffers = styled.div`
  display: flex;
  flex-direction: column;

  @media ${queries.mobile} {
    width: 100%;
  }
`;

export const StyledPersonalMentoringOffers = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledMentoringOwnerTitle = styled.label`
  font-size: 28px;
`;

export const StyledMentoringCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 36px;
  margin-bottom: 16px;
  background-color: ${color.light.primary};
  cursor: pointer;

  @media ${queries.tablet} {
    padding: 24px;
    margin-bottom: 8px;
  }

  @media ${queries.mobile} {
    padding: 16px;
  }
`;

export const StyledMentoringCardUserDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledMentoringCardDescription = styled.label`
  font-size: 28px;

  @media ${queries.tablet} {
    font-size: 24px;
  }

  @media ${queries.mobile} {
    font-size: 20px;
  }
`;

export const StyledMentoringCardPrice = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;
