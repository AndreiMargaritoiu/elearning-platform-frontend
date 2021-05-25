import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

import { StyledHaveAnAccount, StyledSignupPage } from './SignUpPageStyles';
import { Context } from '../../Context';
import { auth, database } from '../../services/Firebase';
import { User } from '../../domain/User';
import { createSearchIndex } from '../../utils/createSearchIndex';

export interface SignupFormValues {
  email: string;
  username: string;
  password: string;
}

const SignUpPage = () => {
  const [currentEmail, setEmail] = useState<string>('');
  const [currentUsername, setUsername] = useState<string>('');
  const [currentPassword, setPassword] = useState<string>('');

  const router = Context.routerService;

  const handleSignup = async (event: any) => {
    event.preventDefault();

    await signUp({
      email: currentEmail,
      username: currentUsername,
      password: currentPassword,
    });
  };

  const isSubmitButtonDisabled: boolean =
    currentEmail.trim().length === 0 || currentPassword.trim().length === 0;

  const signUp = ({ email, username, password }: SignupFormValues) =>
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        if (response.user) {
          const following: string[] = [];
          const newUser: User = {
            uid: response.user.uid,
            searchIndex: createSearchIndex(username),
            email,
            username,
            following,
          };
          database.doc(`users/${response.user.uid}`).set(newUser);
          const authToken: string = await response.user.getIdToken();
          Context.apiService.setAuthToken(authToken);
        }
      })
      .then(() => {
        router.push('dashboard');
        return;
      })
      .catch((error) => {
        return { error };
      });

  return (
    <StyledSignupPage>
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
        <InputLabel htmlFor="component-outlined">Username</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={currentUsername}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
          label="Username"
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
        className="signup-button"
        onClick={handleSignup}
      >
        Register
      </Button>
      <StyledHaveAnAccount>
        Already have an account?{' '}
        <StyledHaveAnAccount
          className="log-in"
          onClick={() => {
            router.push('login');
          }}
        >
          Login!
        </StyledHaveAnAccount>
      </StyledHaveAnAccount>
    </StyledSignupPage>
  );
};

export default SignUpPage;
