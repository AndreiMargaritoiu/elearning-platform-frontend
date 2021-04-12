import { Action } from 'redux';

import { User } from '../../domain/User';

export enum UserActionType {
  GET_USER = 'GET_USER',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_ERROR = 'GET_USERS_ERROR',
}

// Get
export interface GetUserAction extends Action {
  type: UserActionType.GET_USER;
}

export interface GetUserSuccessAction extends Action {
  type: UserActionType.GET_USER_SUCCESS;
  payload: {
    user: User;
  };
}

export interface GetUserErrorAction extends Action {
  type: UserActionType.GET_USER_ERROR;
  payload: {
    error: Error;
  };
}

export const getUserAction = (): GetUserAction => ({
  type: UserActionType.GET_USER,
});

export const getUserSuccessAction = (user: User): GetUserSuccessAction => ({
  type: UserActionType.GET_USER_SUCCESS,
  payload: { user },
});

export const getUserErrorAction = (error: Error): GetUserErrorAction => ({
  type: UserActionType.GET_USER_ERROR,
  payload: { error },
});
