import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { User } from '../../domain/User';
import { setUser } from './appUserAction';

export const setUserThunk = (user: User) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(setUser(user));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    return resultFormatter.error<void, string>(e);
  }
};
