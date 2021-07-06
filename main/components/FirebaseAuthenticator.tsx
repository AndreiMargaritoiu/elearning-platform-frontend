import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { AppState } from '../store/AppState';
import { User, userConverter } from '../domain/User';
import { setUserThunk } from '../store/appUser/setUserThunk';
import { app, auth, database } from '../services/Firebase';
import { Context } from '../Context';
import { setAuthTokenOnRefresh } from '../utils/setAuthToken';

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
  async componentDidMount() {
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
          if (currentUser && auth.currentUser) {
            setUser(currentUser);
            const token = await auth.currentUser.getIdToken();
            Context.cookieService.setCookie('uat', token);
            Context.cookieService.setCookie('uid', currentUser.uid);
          }
        }
      } else {
        Router.push('/login');
      }
    });

    app.auth().onIdTokenChanged(async () => {
      if (auth.currentUser) {
        const authToken: string = await auth.currentUser.getIdToken();
        Context.apiService.setAuthToken(authToken);
      }
    });

    Context.apiService.setAuthToken(Context.cookieService.getCookie('uat'));
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
