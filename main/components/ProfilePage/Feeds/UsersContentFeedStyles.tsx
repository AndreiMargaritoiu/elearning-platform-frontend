import styled from 'styled-components';
import { color, queries } from '../../theme';

export const StyledProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProfileContentCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  background-color: ${color.light.secondary};
`;

export const StyledProfileContentCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  &.actions {
    margin-right: 0px;
    margin-left: auto;
  }
`;

export const StyledProfileContentThumbnail = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 180px;
  width: 320px;
`;

export const StyledProfileContentTitle = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const StyledProfileContentDescription = styled.label`
  font-size: 20px;

  @media ${queries.tablet} {
    font-size: 18px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;
