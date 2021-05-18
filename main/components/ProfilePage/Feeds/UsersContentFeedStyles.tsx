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

  &.others-card {
    cursor: pointer;
  }

  &.mentorship-card {
    border-radius: 30px;
    padding: 16px;

    @media ${queries.tablet} {
      padding: 12px;
      border-radius: 20px;
    }

    @media ${queries.mobile} {
      padding: 8px;
      border-radius: 10px;
    }
  }
`;

export const StyledProfileContentCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  @media ${queries.tablet} {
    margin-left: 4px;
  }

  @media ${queries.mobile} {
    margin-left: 0;
  }

  &.actions {
    margin-right: 8px;
    margin-left: auto;

    @media ${queries.tablet} {
      margin-right: 4px;
    }

    @media ${queries.mobile} {
      margin-right: 0px;
    }
  }

  .first-button {
    margin-bottom: 12px;

    @media ${queries.tablet} {
      margin-bottom: 8px;
    }
  }
`;

export const StyledProfilePlaylistThumbnailDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledProfileContentThumbnail = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 180px;
  margin-right: 8px;
  width: 320px;

  @media ${queries.tablet} {
    font-size: 19px;
  }

  @media ${queries.mobile} {
    height: 70px;
    width: 125px;
  }
`;

export const StyledProfilePlaylistVideosLength = styled.label`
  font-size: 18px;
  padding: 8px;
  bottom: 8px;
  right: 16px;
  position: absolute;
  cursor: pointer;
  color: ${color.light.primary};
  background-color: ${color.dark.primary};

  @media ${queries.tablet} {
    font-size: 16px;
  }

  @media ${queries.mobile} {
    font-size: 14px;
    bottom: 4px;
  }
`;

export const StyledProfileContentTitle = styled.label`
  font-size: 22px;
  margin-bottom: 4px;

  @media ${queries.tablet} {
    font-size: 19px;
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
