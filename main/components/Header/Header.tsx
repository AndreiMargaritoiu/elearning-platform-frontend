import React from 'react';

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { StyledHeader } from './HeaderStyles';
import { User } from '../../domain/User';

interface HeaderProps {
  appUser: User;
  logout(user: User): void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { appUser, logout } = props;

  return (
    <StyledHeader>
      <NavigationBar appUser={appUser} logout={logout} />
    </StyledHeader>
  );
};
