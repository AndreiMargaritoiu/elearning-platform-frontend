import { Action } from 'redux';

import { User } from '../../domain/User';

export enum AppUserActionType {
  SET_USER = 'SET_USER',
}

export interface SetUser extends Action {
  type: AppUserActionType.SET_USER;
  payload: {
    user: User;
  };
}

export const setUser = (user: User): SetUser => ({
  type: AppUserActionType.SET_USER,
  payload: { user },
});
