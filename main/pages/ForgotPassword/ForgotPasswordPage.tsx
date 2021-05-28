import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
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
  const [isSubmitPressed, setSubmitPressed] = useState<boolean>(false);

  const router = Context.routerService;

  const handleResetPassword = async (event: any) => {
    event.preventDefault();

    await resetPassword(currentEmail.trim());
  };

  const isSubmitButtonDisabled: boolean = currentEmail.trim().length === 0;

  const isEmailValid = (mailToCheck: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mailToCheck.toLowerCase());
  };

  const resetPassword = (email: string) => {
    setSubmitPressed(true);
    if (isEmailValid(email)) {
      auth
        .sendPasswordResetEmail(email)
        .then((response) => {
          router.push('login');
        })
        .catch((error) => {
          Context.alertService.fire({
            text: error,
          });
        });
    }
  };

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
        {!isEmailValid(currentEmail) && isSubmitPressed && (
          <FormHelperText className="error">
            Invalid email format
          </FormHelperText>
        )}
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
