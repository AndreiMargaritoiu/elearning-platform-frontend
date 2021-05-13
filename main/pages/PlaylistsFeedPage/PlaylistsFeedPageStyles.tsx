import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledPlaylistsFeedPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 48px;

  @media ${queries.tablet} {
    margin: 0 24px;
  }

  @media ${queries.mobile} {
    margin: 0;
    padding: 0;
  }
`;

export const StyledPlaylistFeedTitle = styled.label`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;

  @media ${queries.tablet} {
    font-size: 24px;
  }

  @media ${queries.mobile} {
    margin: 16px;
    font-size: 22px;
  }
`;

export const StyledPlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.light.secondary};
  cursor: pointer;
`;

export const StyledPlaylistCardUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 12px;

  @media ${queries.mobile} {
    padding: 8px 16px;
  }
`;

export const StyledPlaylistUserProfilePic = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
`;

export const StyledPlaylistUsername = styled.label`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  @media ${queries.mobile} {
    font-size: 14px;
  }
`;

export const StyledPlaylistCardContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;

export const StyledPlaylistCardTitle = styled.label`
  font-size: 24px;
  margin: 8px 16px 4px 16px;
  font-weight: 550;
  cursor: pointer;

  @media ${queries.tablet} {
    font-size: 21px;
  }

  @media ${queries.mobile} {
    font-size: 18px;
  }
`;

export const StyledPlaylistCardDescription = styled.label`
  font-size: 20px;
  margin: 0 16px;
  cursor: pointer;

  @media ${queries.tablet} {
    font-size: 18px;
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
  cursor: pointer;
  color: ${color.light.primary};
  background-color: ${color.dark.primary};

  @media ${queries.tablet} {
    font-size: 18px;
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
