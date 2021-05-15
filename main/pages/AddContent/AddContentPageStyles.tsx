import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledAddContentPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 48px;
  padding: 24px 0;

  @media ${queries.tablet} {
    margin: 0 24px;
  }

  @media ${queries.mobile} {
    margin: 0 16px;
  }
`;

export const StyledAddContentPageSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;

  &.add-menu {
    border-right: thin solid ${color.light.tertiary};
  }
`;

export const StyledAddContentMenuItem = styled.label`
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 16px;

  @media ${queries.tablet} {
    font-size: 18px;
  }

  &:hover,
  &.active {
    color: ${color.other.primary};
  }
`;
