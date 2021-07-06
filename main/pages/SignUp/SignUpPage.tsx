import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
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
  const [isSubmitPressed, setSubmitPressed] = useState<boolean>(false);

  const router = Context.routerService;

  const handleSignup = async (event: any) => {
    event.preventDefault();

    await signUp({
      email: currentEmail.trim(),
      username: currentUsername.trim(),
      password: currentPassword.trim(),
    });
  };

  const isSubmitButtonDisabled: boolean =
    currentEmail.trim().length === 0 ||
    currentPassword.trim().length === 0 ||
    currentUsername.trim().length === 0;

  const isEmailValid = (mailToCheck: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mailToCheck.toLowerCase());
  };

  const isPasswordValid = (passToCheck: string): boolean => {
    // const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})$/;
    // return re.test(passToCheck);
    return passToCheck.trim().length > 6;
  };

  const isUsernameValid = (usernameToCheck: string): boolean => {
    return !usernameToCheck.includes(' ') && usernameToCheck.length > 3;
  };

  const signUp = ({ email, username, password }: SignupFormValues) => {
    setSubmitPressed(true);
    if (
      isEmailValid(email) &&
      isPasswordValid(password) &&
      isUsernameValid(username.trim())
    ) {
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
          Context.alertService.fire({
            text: error,
            icon: 'error',
          });
        });
    }
  };

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
        {!isEmailValid(currentEmail) && isSubmitPressed && (
          <FormHelperText className="error">
            Invalid email format
          </FormHelperText>
        )}
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
        {!isUsernameValid(currentUsername.trim()) && isSubmitPressed && (
          <FormHelperText className="error">
            Username must have at least 3 characters and it should not contain
            spaces
          </FormHelperText>
        )}
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
        {!isPasswordValid(currentPassword) && isSubmitPressed && (
          <FormHelperText className="error">
            Password must have at least 6 characters, one lower and one upper
            character, a number and a special character
          </FormHelperText>
        )}
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
