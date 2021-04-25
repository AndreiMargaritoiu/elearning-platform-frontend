import { User } from '../../domain/User';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import { GetUsersSuccessAction, UsersActionType } from './usersActions';

type ActionType = SetInitialStateAction | GetUsersSuccessAction;

export const initialState: User[] = [];

export const usersReducer = (
  store = initialState,
  action: ActionType,
): User[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case UsersActionType.GET_USERS_SUCCESS:
      return action.payload.users;
    default:
      return store;
  }
};
