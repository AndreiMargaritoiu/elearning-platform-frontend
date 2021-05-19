import { User } from '../../domain/User';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import { GetUserSuccessAction, UserActionType } from './userActions';

type ActionType = SetInitialStateAction | GetUserSuccessAction;

export const initialState: User = {
  email: '',
  username: '',
  uid: '',
  following: [],
  searchIndex: [],
  photoUrl: '',
};

export const userReducer = (
  userState: User = initialState,
  action: ActionType,
): User => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case UserActionType.GET_USER_SUCCESS:
      return action.payload.user;
    default:
      return userState;
  }
};
