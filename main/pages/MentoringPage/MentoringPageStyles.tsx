import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledMentoringPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;

  @media ${queries.tablet} {
    margin: 0 24px;
    width: auto;
  }

  @media ${queries.mobile} {
    margin: 0 16px;
  }
`;

export const StyledFiltersBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  border-bottom: 1px solid ${color.dark.quaternary};
`;

export const StyledFilterItem = styled.div<{ active: boolean }>`
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  color: ${color.dark.quaternary};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${color.dark.primary};
  }

  ${({ active }) =>
    active &&
    `
        color: ${color.dark.primary};
        border: 1px solid ${color.light.tertiary};
        border-bottom: 0;
    `};
`;

export const StyledMentoringOffers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledMentoringOwnerTitle = styled.label`
  font-size: 28px;
  margin-bottom: 32px;
`;

export const StyledMentoringCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  margin-bottom: 16px;
  background-color: ${color.light.secondary};

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
  cursor: pointer;
  margin-bottom: 8px;
`;

export const StyledMentoringCardBodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const StyledMentorProfilePicture = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 240px;
`;
