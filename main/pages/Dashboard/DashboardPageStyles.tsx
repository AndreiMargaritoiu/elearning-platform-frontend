import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 48px;
  padding: 24px;
  background-color: ${color.light.tertiary};

  @media ${queries.tablet} {
    margin: 0 24px;
    padding: 16px;
  }

  @media ${queries.mobile} {
    margin: 0;
    padding: 0;
    background-color: ${color.light.primary};
  }
`;

export const StyledVideoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.light.primary};
  cursor: pointer;

  @media ${queries.mobile} {
    background-color: ${color.light.secondary};
    border-radius: 10px;
  }
`;

export const StyledVideoCardContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;

export const StyledVideoCardTitle = styled.label`
  font-size: 28px;

  @media ${queries.tablet} {
    font-size: 24px;
  }

  @media ${queries.mobile} {
    font-size: 20px;
  }
`;

export const StyledVideoCardDescription = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }

  .bottom-navigation {
    max-width: 300px;
  }
`;

export const StyledVideoCardThumbnail = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 240px;
`;
