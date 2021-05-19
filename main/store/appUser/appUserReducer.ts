import { User } from '../../domain/User';
import { SetInitialStateAction } from '../setInitialStateAction';
import {
  AppUserActionType,
  SetUser,
  UpdateUserSuccessAction,
} from './appUserAction';

type ActionType = SetInitialStateAction | SetUser | UpdateUserSuccessAction;

const user: User = {
  uid: '',
  email: '',
  username: '',
  following: [],
  searchIndex: [],
  photoUrl: '',
};

export const appUserReducer = (
  state: User = user,
  action: ActionType,
): User => {
  switch (action.type) {
    case AppUserActionType.SET_USER:
      return action.payload.user;
    case AppUserActionType.UPDATE_USER_SUCCESS:
      return action.payload.user;
    default:
      return state;
  }
};
