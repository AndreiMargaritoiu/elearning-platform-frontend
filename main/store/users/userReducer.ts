import { User } from '../../domain/User';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import { GetUsersSuccessAction, UserActionType } from './userActions';

type ActionType = SetInitialStateAction | GetUsersSuccessAction;

export const initialState: User[] = [];

export const userReducer = (
  store = initialState,
  action: ActionType,
): User[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case UserActionType.GET_USERS_SUCCESS:
      return {
        ...store,
        ...action.payload,
      };
    default:
      return store;
  }
};
