import React from 'react';

import { User } from '../domain/User';
import { Header } from '../components/Header/Header';
import { AppState } from '../store/AppState';
import { setUserThunk } from '../store/appUser/setUserThunk';
import { connect } from 'react-redux';

export interface LayoutStateProps {
  appUser: User;
}

interface LayoutDispatchProps {
  logout(user: User): void;
}

interface LayoutProps {
  children: React.ReactNode;
}

type Props = LayoutStateProps & LayoutDispatchProps & LayoutProps;

const UnconnectedPageLayout: React.FC<Props> = (props) => {
  const { appUser, children, logout } = props;

  return (
    <>
      <Header appUser={appUser} logout={logout} />
      <main id="content">{children}</main>
    </>
  );
};

const mapState = ({ appUser }: AppState): LayoutStateProps => ({
  appUser,
});

const mapDispatchToProps: LayoutDispatchProps = {
  logout: setUserThunk,
};

export const PageLayout = connect<
  LayoutStateProps,
  LayoutDispatchProps,
  LayoutProps,
  AppState
>(
  mapState,
  mapDispatchToProps,
)(UnconnectedPageLayout);
