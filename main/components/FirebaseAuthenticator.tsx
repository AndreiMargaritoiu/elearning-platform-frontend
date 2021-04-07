import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { AppState } from '../store/AppState';
import { User, userConverter } from '../domain/User';
import { setUserThunk } from '../store/appUser/setUserThunk';
import { app, database } from './firebase';

interface StateProps {
  appUser: User;
}

interface PianoProviderProps {
  children: React.ReactNode;
}

interface DispatchProps {
  setUser(user: User): void;
}

type Props = StateProps & PianoProviderProps & DispatchProps;

export class UnconnectedFirebaseProvider extends React.Component<Props> {
  componentDidMount() {
    const { setUser } = this.props;

    app.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userData = await database
          .collection('users')
          .doc(user.uid)
          .withConverter(userConverter)
          .get();
        if (userData.data()) {
          const currentUser: User | undefined = userData.data();
          if (currentUser) {
            setUser(currentUser);
          }
        }
      } else {
        Router.push('/login');
      }
    });
  }

  render() {
    const { appUser, children } = this.props;

    if (!appUser) {
      return null;
    } else {
      return <>{children}</>;
    }
  }
}

const mapState = ({ appUser }: AppState) => ({
  appUser,
});

const mapDispatch: DispatchProps = {
  setUser: setUserThunk,
};

export const FirebaseAuthenticator = connect<
  StateProps,
  DispatchProps,
  {},
  AppState
>(
  mapState,
  mapDispatch,
)(UnconnectedFirebaseProvider);
