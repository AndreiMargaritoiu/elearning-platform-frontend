import { User } from '../../domain/User';
import { AppUserActionType, SetUser } from './appUserAction';

const user: User = {
  uid: '',
  email: '',
  username: '',
  following: [],
  searchIndex: [],
  profilePictureUrl: '',
};

export const appUserReducer = (state: User = user, action: SetUser): User => {
  switch (action.type) {
    case AppUserActionType.SET_USER:
      return action.payload.user;
    default:
      return state;
  }
};
