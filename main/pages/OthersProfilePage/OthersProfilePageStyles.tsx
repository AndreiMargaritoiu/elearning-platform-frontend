import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledOthersProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 16px auto;

  @media ${queries.tablet} {
    width: auto;
    margin: 16px 24px;
  }

  @media ${queries.mobile} {
    margin: 8px 16px;
  }
`;

export const StyledOthersProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
  border-bottom: 2px solid ${color.light.tertiary};

  @media ${queries.mobile} {
    padding-bottom: 12px;
  }

  .follow-button {
    align-self: flex-start;
    margin-right: 0;
    margin-left: auto;
    background: ${color.dark.secondary};
    color: ${color.light.primary};
    font-size: 14px;

    &:hover {
      color: ${color.dark.primary};
    }

    @media ${queries.tablet} {
      font-size: 12px;
    }

    @media ${queries.mobile} {
      margin-top: 8px;
      font-size: 10px;
    }
  }
`;

export const StyledOthersProfileStats = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;

  @media ${queries.mobile} {
    margin-left: 16px;
  }
`;

export const StyledOthersProfileUsername = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const StyledOthersProfileNumericalStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;

  @media ${queries.mobile} {
    margin-top: 12px;
  }
`;

export const StyledOthersProfileNumericalStatsText = styled.label`
  font-size: 20px;

  @media ${queries.tablet} {
    font-size: 18px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;
