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
    flex-direction: column;
  }
`;

export const StyledAddContentPageSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  border-right: thin solid ${color.light.tertiary};

  @media ${queries.mobile} {
    display: none;
  }
`;

export const StyledAddContentPageDiv = styled.div`
  display: flex;
  flex-direction: column;
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

export const StyledAddContentPicker = styled.div`
  display: none;

  @media ${queries.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 24px;
  }
`;

export const StyledAddContentPickerElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &.is-selected {
    @media ${queries.mobile} {
      border-bottom: 2px solid ${color.light.tertiary};
    }
  }
`;
