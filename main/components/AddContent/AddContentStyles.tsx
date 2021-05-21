import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledAddContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
  padding: 24px 72px;
  border: 1px solid ${color.dark.primary};
  position: relative;
  width: 600px;
  min-width: 600px;

  @media ${queries.tablet} {
    width: initial;
    min-width: 380px;
  }

  @media ${queries.mobile} {
    margin: 0;
    padding: 24px 16px;
    width: inherit;
    min-width: 0;
  }

  .add-button {
    align-self: flex-end;
    background-color: ${color.dark.primary};
    color: ${color.light.primary};

    &:hover {
      color: ${color.dark.primary};
    }
  }

  .text-field {
    margin-bottom: 24px;

    @media ${queries.mobile} {
      margin-bottom: 16%;
    }
  }
`;

export const StyledAddContentSectionTitle = styled.div`
  position: absolute;
  padding: 8px;
  background-color: ${color.light.primary};
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  top: -24px;
  left: 24px;
`;

export const StyledAddContentRowField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;

  @media ${queries.mobile} {
    margin-bottom: 16%;
  }
`;

export const StyledAddContentField = styled.label`
  font-size: 18px;

  &.margin-right {
    margin-right: 8px;
  }

  @media ${queries.tablet} {
    font-size: 16px;
  }

  @media ${queries.mobile} {
    font-size: 14px;
  }
`;
