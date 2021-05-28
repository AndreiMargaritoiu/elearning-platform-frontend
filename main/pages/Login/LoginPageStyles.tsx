import styled from 'styled-components';
import { queries, color } from '../../components/theme';

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);

  @media ${queries.mobile} {
    top: 0;
    left: 0;
    transform: translate(0);
    position: absolute;
    padding: 72px 24px;
  }

  .text-field {
    width: 400px;
    margin-bottom: 24px;

    @media ${queries.mobile} {
      align-self: stretch;
    }
  }

  .login-button {
    width: 400px;
    margin-bottom: 72px;

    @media ${queries.mobile} {
      width: 100%;
    }
  }

  .error {
    color: ${color.accent.primary};
  }
`;

export const StyledDontHaveAnAccount = styled.label`
  font-size: 20px;
  align-self: center;

  @media ${queries.tablet} {
    font-size: 18px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }

  .sign-up {
    cursor: pointer;
    font-weight: 600;
  }
`;
