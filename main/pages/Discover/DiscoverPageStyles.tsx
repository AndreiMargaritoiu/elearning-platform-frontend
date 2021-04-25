import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledDiscoverPageCotnainer = styled.div`
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
