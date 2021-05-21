import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

import {
  StyledDontHaveAnAccount,
  StyledForgotPasswordPage,
} from './ForgotPasswordPageStyles';
import { Context } from '../../Context';
import { auth } from '../../services/Firebase';

const ForgotPasswordPage = () => {
  const [currentEmail, setEmail] = useState<string>('');

  const router = Context.routerService;

  const handleResetPassword = async (event: any) => {
    event.preventDefault();

    await resetPassword(currentEmail);
  };

  const isSubmitButtonDisabled: boolean = currentEmail.trim().length === 0;

  const resetPassword = (email: string) =>
    auth
      .sendPasswordResetEmail(email)
      .then((response) => {
        router.push('login');
      })
      .catch((error) => {
        return { error };
      });

  return (
    <StyledForgotPasswordPage>
      <FormControl variant="outlined" className="text-field">
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={currentEmail}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
          label="Email"
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitButtonDisabled}
        className="reset-pass-button"
        onClick={handleResetPassword}
      >
        Reset password
      </Button>
      <StyledDontHaveAnAccount>
        Don't have an account?{' '}
        <StyledDontHaveAnAccount
          className="sign-up"
          onClick={() => {
            router.push('signup');
          }}
        >
          Sign Up!
        </StyledDontHaveAnAccount>
      </StyledDontHaveAnAccount>
    </StyledForgotPasswordPage>
  );
};

export default ForgotPasswordPage;
