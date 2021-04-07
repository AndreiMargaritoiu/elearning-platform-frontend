import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

import { StyledLoginPage } from './LoginPageStyles';
import { auth } from '../../components/firebase';
import { Context } from '../../Context';

export interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [currentEmail, setEmail] = useState<string>('');
  const [currentPassword, setPassword] = useState<string>('');
  const [isLoginPressed, updateLoginPressed] = useState<boolean>(false);

  const router = Context.routerService;

  const handleLogin = async (event: any) => {
    event.preventDefault();

    await signIn({
      email: currentEmail,
      password: currentPassword,
    });
  };

  const isSubmitButtonDisabled: boolean =
    currentEmail.length === 0 || currentPassword.length === 0;

  const signIn = ({ email, password }: LoginFormValues) =>
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        router.push('dashboard');
        return response.user;
      })
      .catch((error) => {
        return { error };
      });

  return (
    <StyledLoginPage>
      <form onSubmit={handleLogin} className="vertical-form">
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
          className="add-user-button"
          onClick={() => updateLoginPressed(true)}
        >
          Login
        </Button>
      </form>
    </StyledLoginPage>
  );
};

export default LoginPage;
