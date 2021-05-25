import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

import { StyledDontHaveAnAccount, StyledLoginPage } from './LoginPageStyles';
import { Context } from '../../Context';
import { auth } from '../../services/Firebase';

export interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [currentEmail, setEmail] = useState<string>('');
  const [currentPassword, setPassword] = useState<string>('');

  const router = Context.routerService;

  const handleLogin = async (event: any) => {
    event.preventDefault();

    await signIn({
      email: currentEmail,
      password: currentPassword,
    });
  };

  const isSubmitButtonDisabled: boolean =
    currentEmail.trim().length === 0 || currentPassword.trim().length === 0;

  const signIn = ({ email, password }: LoginFormValues) =>
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (response) => {
        if (response.user) {
          const authToken: string = await response.user.getIdToken();
          Context.apiService.setAuthToken(authToken);
          router.push('dashboard');
          return response.user;
        }
      })
      .catch((error) => {
        return { error };
      });

  return (
    <StyledLoginPage>
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
      <FormControl variant="outlined" className="text-field">
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={currentPassword}
          type="password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
          label="Password"
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitButtonDisabled}
        className="login-button"
        onClick={handleLogin}
      >
        Login
      </Button>
      <StyledDontHaveAnAccount>
        Forgot your password?{' '}
        <StyledDontHaveAnAccount
          className="sign-up"
          onClick={() => {
            router.push('reset-password');
          }}
        >
          Reset it!
        </StyledDontHaveAnAccount>
      </StyledDontHaveAnAccount>
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
    </StyledLoginPage>
  );
};

export default LoginPage;
