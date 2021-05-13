import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledDiscoverPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 48px;

  @media ${queries.tablet} {
    margin: 0 24px;
  }

  @media ${queries.mobile} {
    margin: 0 16px;
  }
`;

export const StyledDiscoverTitle = styled.label`
  font-size: 28px;
  font-weight: 600;

  @media ${queries.tablet} {
    font-size: 24px;
  }

  @media ${queries.mobile} {
    font-size: 22px;
  }

  &.trending-videos {
    margin-top: 32px;

    @media ${queries.mobile} {
      margin-top: 24px;
    }
  }
`;

export const StyledDiscoverVideoContainer = styled.div`
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
