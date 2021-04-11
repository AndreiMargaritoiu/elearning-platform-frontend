import styled from 'styled-components';

import { color, queries } from '../../components/theme';

export const StyledPlaylistPage = styled.div`
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
    margin: 0 16px;
  }
`;

export const StyledMainPlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
  background-color: ${color.light.primary};
  height: 600px;

  @media ${queries.tablet} {
    padding: 24px;
  }

  @media ${queries.mobile} {
    padding: 16px;
  }
`;

export const StyledSecondaryPlaylistsContainer = styled.div`
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

export const StyledSecondaryPlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
  margin-bottom: 16px;
  background-color: ${color.light.primary};
  cursor: pointer;
  width: 300px;

  @media ${queries.tablet} {
    padding: 24px;
    margin-bottom: 8px;
  }

  @media ${queries.mobile} {
    padding: 16px;
  }
`;
