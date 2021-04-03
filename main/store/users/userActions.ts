import { Action } from 'redux';

import { User } from '../../domain/User';

export enum UserActionType {
  GET_USERS = 'GET_USER',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_ERROR = 'GET_USERS_ERROR',
}

export interface GetUsersAction extends Action {
  type: UserActionType.GET_USERS;
}

export interface GetUsersSuccessAction extends Action {
  type: UserActionType.GET_USERS_SUCCESS;
  payload: {
    users: User[];
  };
}

export interface GetUsersErrorAction extends Action {
  type: UserActionType.GET_USERS_ERROR;
  payload: {
    error: Error;
  };
}

export const getUsersAction = (): GetUsersAction => ({
  type: UserActionType.GET_USERS,
});

export const getUsersSuccessAction = (
  users: User[],
): GetUsersSuccessAction => ({
  type: UserActionType.GET_USERS_SUCCESS,
  payload: { users },
});

export const getUsersErrorAction = (error: Error): GetUsersErrorAction => ({
  type: UserActionType.GET_USERS_ERROR,
  payload: { error },
});
