import styled from 'styled-components';
import { color, font, queries } from '../theme';

export const MentoringModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MentoringModalHeaderContainer = styled.div`
  letter-spacing: 0.25px;
  font-size: 34px;
  font-weight: 600;
  font-family: ${font.primary};
  border-bottom: 1px solid black;
  padding: 24px 0;
  margin: 0 24px;

  @media ${queries.tablet} {
    padding: 16px 0 24px 0;
    margin: 0 16px;
  }
`;

export const MentoringModalBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 24px 32px 24px;

  @media ${queries.tablet} {
    padding: 16px;
  }
`;

export const MentoringModalFooterContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  border-top: 1px solid black;
  padding: 24px;

  > button {
    margin-left: 32px;
    &.small {
      padding: 15px 32px;
    }
  }

  @media ${queries.tablet} {
    padding: 16px;
  }

  @media ${queries.mobile} {
    flex-direction: column;
    > button {
      margin: 0;
      &:nth-child(2) {
        margin-top: 16px;
      }
    }
  }
`;

export const modalStyles = {
  content: {
    overflow: 'auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: 0,
    borderColor: 'black',
    boxShadow: '4px 4px 0 0 #000000',
    maxHeight: '80%',
    maxWidth: '85%',
  },
};
