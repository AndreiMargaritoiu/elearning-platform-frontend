import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledAddContentPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 48px;
  padding: 24px 0;

  @media ${queries.tablet} {
    margin: 0 24px;
    padding: 16px;
  }

  @media ${queries.mobile} {
    margin: 0 16px;
  }
`;

export const StyledAddContentPageMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  border-right: thin solid ${color.light.tertiary};
`;

export const StyledAddContentMenuItem = styled.label`
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    color: ${color.other.primary};
  }
`;

export const Separator = styled.div`
  border-bottom: thin solid ${color.light.tertiary};
  margin: 16px 0;
`;
