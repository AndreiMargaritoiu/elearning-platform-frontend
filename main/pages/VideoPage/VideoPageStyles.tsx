import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledVideoPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 48px;

  @media ${queries.tablet} {
    margin: 0 24px;
  }

  @media ${queries.mobile} {
    margin: 0;
  }
`;

export const StyledMainVideoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.light.primary};

  @media ${queries.tablet} {
    margin-bottom: 24px;
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const StyledMainVideoCardTitle = styled.label`
  font-size: 28px;

  @media ${queries.tablet} {
    font-size: 24px;
  }

  @media ${queries.mobile} {
    font-size: 20px;
    margin: 0 16px;
  }
`;

export const StyledVideoUserDiv = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  margin-top: 8px;

  @media ${queries.mobile} {
    font-size: 18px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
    margin-top: 4px;

    &.main-video {
      margin: 4px 16px 0 16px;
    }
  }
`;

export const StyledVideoAuthor = styled.label`
  text-decoration: none;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    color: ${color.other.primary};
  }
`;

export const StyledMainVideoCardDescription = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
    margin: 0 16px;
  }
`;

export const StyledWatchNextLabel = styled.label`
  font-size: 22px;
  line-height: 32px;
  margin-left: 48px;

  @media ${queries.tablet} {
    font-size: 20px;
    margin: 0;
  }

  @media ${queries.mobile} {
    font-size: 18px;
    margin-left: 16px;
  }
`;

export const StyledNextVideosContainer = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
  overflow-y: scroll;
  height: ${({ height }) => height}px;

  @media ${queries.tablet} {
    margin-left: 0;
    height: auto;
  }

  @media ${queries.mobile} {
    margin: 0 16px;
  }
`;

export const StyledNextVideoCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${color.light.secondary};
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 16px;
  }

  @media ${queries.tablet} {
    margin-bottom: 16px;
  }
`;

export const StyledNextImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 204px;

  @media ${queries.tablet} {
    flex-basis: 306px;
  }

  @media ${queries.mobile} {
    flex-basis: 133px;
  }
`;

export const StyledNextEpisodeImageWrapper = styled.div<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 56.25%;
  width: 100%;
  position: relative;
`;

export const StyledNextEpisodeImage = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledNextEpisodeDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  margin-left: 8px;
`;

export const StyledNextEpisodeTitle = styled.label`
  font-weight: 600;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const StyledNextEpisodeDescription = styled.label`
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${queries.mobile} {
    font-size: 15px;
  }
`;
