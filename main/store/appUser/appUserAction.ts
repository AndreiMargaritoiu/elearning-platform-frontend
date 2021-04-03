import { Action } from 'redux';

import { User } from '../../domain/User';

export enum AppUserActionType {
  GET_USER = 'GET_USER',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_ERROR = 'GET_USER_ERROR',
}

export interface GetUserAction extends Action {
  type: AppUserActionType.GET_USER;
}

export interface GetUserSuccessAction extends Action {
  type: AppUserActionType.GET_USER_SUCCESS;
  payload: {
    user: User;
  };
}

export interface GetUserErrorAction extends Action {
  type: AppUserActionType.GET_USER_ERROR;
  payload: {
    error: Error;
  };
}

export const getUserAction = (): GetUserAction => ({
  type: AppUserActionType.GET_USER,
});

export const getUserSuccessAction = (user: User): GetUserSuccessAction => ({
  type: AppUserActionType.GET_USER_SUCCESS,
  payload: { user },
});

export const getUserErrorAction = (error: Error): GetUserErrorAction => ({
  type: AppUserActionType.GET_USER_ERROR,
  payload: { error },
});
