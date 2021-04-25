import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledPlaylistsFeedPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 48px;
  padding: 24px;

  @media ${queries.tablet} {
    margin: 0 24px;
    padding: 16px;
  }

  @media ${queries.mobile} {
    margin: 0 16px;
  }
`;

export const StyledPlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: ${color.light.secondary};
`;

export const StyledPlaylistCardUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 24px;
  border-bottom: 1px solid ${color.dark.quaternary};
  margin-bottom: 12px;

  @media ${queries.mobile} {
    padding: 8px 16px;
  }
`;

export const StyledPlaylistCardContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;

  @media ${queries.mobile} {
    padding: 8px 16px;
  }
`;

export const StyledPlaylistCardTitle = styled.label`
  font-size: 28px;

  @media ${queries.tablet} {
    font-size: 24px;
  }

  @media ${queries.mobile} {
    font-size: 20px;
  }
`;

export const StyledPlaylistCardDescription = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const StyledPlaylistThumbnailDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  position: relative;
`;

export const StyledPlaylistVideosLength = styled.label`
  font-size: 20px;
  padding: 8px;
  bottom: 16px;
  right: 16px;
  position: absolute;
  color: ${color.light.primary};
  background-color: ${color.dark.primary};

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
    bottom: 8px;
    right: 8px;
  }
`;

export const StyledPlaylistCardThumbnail = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 240px;
`;
