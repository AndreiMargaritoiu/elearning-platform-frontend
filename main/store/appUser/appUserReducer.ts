import { User } from '../../domain/User';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import { AppUserActionType, GetUserSuccessAction } from './appUserAction';

type ActionType = SetInitialStateAction | GetUserSuccessAction;

export const initialState: User = {
  email: '',
  username: '',
  following: [],
  searchIndex: [],
  uid: '',
  profilePictureUrl: '',
};

export const appUserReducer = (
  store = initialState,
  action: ActionType,
): User => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case AppUserActionType.GET_USER_SUCCESS:
      return {
        ...store,
        ...action.payload,
      };
    default:
      return store;
  }
};
