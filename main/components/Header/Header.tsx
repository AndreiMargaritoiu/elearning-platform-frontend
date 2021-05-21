import React from 'react';

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { StyledHeader } from './HeaderStyles';
import { User } from '../../domain/User';
import { Inquiry } from '../../domain/Inquiry';

interface HeaderProps {
  appUser: User;
  inquiries: Inquiry[];
  getMyNotifications(userId: string): void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { appUser, inquiries, getMyNotifications } = props;

  return (
    <StyledHeader>
      <NavigationBar
        appUser={appUser}
        notifications={inquiries}
        getMyNotifications={getMyNotifications}
      />
    </StyledHeader>
  );
};
