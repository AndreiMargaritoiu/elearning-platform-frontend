import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledNotificationsPage = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px;

  @media ${queries.mobile} {
    margin: 16px;
  }
`;

export const StyledNotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledNotificationText = styled.label`
  font-size: 20px;
  margin-bottom: 16px;

  @media ${queries.tablet} {
    font-size: 18px;
    margin-bottom: 8px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const SeparatorStyles = styled.div`
  border-bottom: 1px solid ${color.light.tertiary};
  margin-bottom: 16px;

  @media ${queries.tablet} {
    margin-bottom: 8px;
  }
`;
