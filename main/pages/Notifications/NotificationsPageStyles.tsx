import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledNotificationsPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20%;

  @media ${queries.tablet} {
    margin: 0 10%;
  }

  @media ${queries.mobile} {
    margin: 16px;
  }
`;

export const StyledNotificationText = styled.label`
  font-size: 20px;
  margin-bottom: 8px;

  @media ${queries.tablet} {
    font-size: 18px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;
