import { User } from '../../domain/User';
import { AppUserActionType, SetUser } from './appUserAction';

const user: User | null = null;

export const appUserReducer = (
  state: User | null = user,
  action: SetUser,
): User | null => {
  switch (action.type) {
    case AppUserActionType.SET_USER:
      return action.payload.user;
    default:
      return state;
  }
};
