import styled from 'styled-components';

import { color, queries } from '../../components/theme';

export const StyledPlaylistPage = styled.div`
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

export const StyledPlaylistName = styled.label`
  font-weight: 600;
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 21px;
  }

  @media ${queries.mobile} {
    font-size: 18px;
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
