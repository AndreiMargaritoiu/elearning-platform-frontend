import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledDiscoverPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 48px 48px 48px;

  @media ${queries.tablet} {
    margin: 12px 24px 24px 24px;
  }

  @media ${queries.mobile} {
    margin: 8px 16px 16px 16px;
  }
`;

export const StyledDiscoverTitle = styled.label`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;

  @media ${queries.tablet} {
    font-size: 24px;
  }

  @media ${queries.mobile} {
    font-size: 22px;
  }

  &.trending-videos {
    margin-top: 48px;

    @media ${queries.mobile} {
      margin-top: 24px;
    }
  }
`;

export const StyledDiscoverContentContainer = styled.div`
  .other-modules-carousel {
    .react-multi-carousel-item {
      transform-style: unset;
    }

    .react-multiple-carousel__arrow {
      width: 28px;
      height: 28px;
      min-width: 28px;
      min-height: 28px;
      border: 2px solid ${color.light.primary};
      background-color: ${color.dark.primary};
      position: absolute;
      border-radius: 100%;

      &:before {
        font-size: 12px;
        font-weight: bold;
      }
    }

    .react-multiple-carousel__arrow--left {
      left: 0;
    }

    .react-multiple-carousel__arrow--right {
      right: 0;
    }
  }
`;

export const StyledDiscoverContentCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.light.secondary};
  border-radius: 5%;
  margin: 0 16px;
`;

export const StyledDiscoverWorkshopDescription = styled.label`
  padding: 16px;
  font-size: 20px;

  @media ${queries.tablet} {
    font-size: 18px;
    padding: 12px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
    padding: 8px;
  }
`;

export const StyledDiscoverWorkshopDetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 8px;

  @media ${queries.tablet} {
    padding: 0 12px;
  }

  @media ${queries.mobile} {
    padding: 0 8px;
    margin-bottom: 4px;
  }

  :last-child {
    margin-bottom: 16px;

    @media ${queries.tablet} {
      margin-bottom: 12px;
    }

    @media ${queries.mobile} {
      margin-bottom: 8px;
    }
  }
`;

export const StyledDiscoverWorkshopDetails = styled.label`
  font-size: 18px;

  @media ${queries.tablet} {
    font-size: 16px;
  }

  @media ${queries.mobile} {
    font-size: 14px;
  }

  &.tag {
    padding: 0 16px;
    margin-bottom: 8px;

    @media ${queries.tablet} {
      padding: 0 12px;
    }

    @media ${queries.mobile} {
      margin-bottom: 4px;
      padding: 0 8px;
    }
  }
`;

export const StyledDiscoverVideoTitle = styled.label`
  font-size: 24px;
  padding: 16px;
  cursor: pointer;

  @media ${queries.tablet} {
    font-size: 22px;
    padding: 12px;
  }

  @media ${queries.mobile} {
    font-size: 20px;
    padding: 8px;
  }
`;

export const StyledDiscoverVideoUserDiv = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  padding: 8px 16px 16px 16px;

  @media ${queries.tablet} {
    padding: 6px 12px 12px 12px;
  }

  @media ${queries.mobile} {
    font-size: 14px;
    padding: 4px 8px 8px 8px;
  }
`;

export const StyledDiscoverCardThumbnail = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 240px;
  margin-bottom: 8px;

  &.video-thumbnail {
    cursor: pointer;
  }
`;
