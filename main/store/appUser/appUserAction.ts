import { Action } from 'redux';

import { User } from '../../domain/User';

export enum AppUserActionType {
  SET_USER = 'SET_USER',
}

export interface SetUser extends Action {
  type: AppUserActionType.SET_USER;
  payload: {
    user: User | null;
  };
}

export const setUser = (user: User | null): SetUser => ({
  type: AppUserActionType.SET_USER,
  payload: { user },
});
