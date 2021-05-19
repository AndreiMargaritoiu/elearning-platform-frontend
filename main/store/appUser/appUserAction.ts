import { Action } from 'redux';

import { User } from '../../domain/User';

export enum AppUserActionType {
  SET_USER = 'SET_USER',
  UPDATE_USER = 'UPDATE_USER',
  UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
  UPDATE_USER_ERROR = 'UPDATE_USERS_ERROR',
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

// Update
export interface UpdateUserAction extends Action {
  type: AppUserActionType.UPDATE_USER;
}

export interface UpdateUserSuccessAction extends Action {
  type: AppUserActionType.UPDATE_USER_SUCCESS;
  payload: {
    user: User;
  };
}

export interface UpdateUserErrorAction extends Action {
  type: AppUserActionType.UPDATE_USER_ERROR;
  payload: {
    error: Error;
  };
}

export const updateUserAction = (): UpdateUserAction => ({
  type: AppUserActionType.UPDATE_USER,
});

export const updateUserSuccessAction = (
  user: User,
): UpdateUserSuccessAction => ({
  type: AppUserActionType.UPDATE_USER_SUCCESS,
  payload: { user },
});

export const updateUserErrorAction = (error: Error): UpdateUserErrorAction => ({
  type: AppUserActionType.UPDATE_USER_ERROR,
  payload: { error },
});
