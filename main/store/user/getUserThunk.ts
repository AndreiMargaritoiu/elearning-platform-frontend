import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getUserAction,
  getUserErrorAction,
  getUserSuccessAction,
} from './userActions';
import { User } from '../../domain/User';

export const getUserThunk = (userId: string) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getUserAction());

    const user: User = await Context.apiService.getUser(userId);

    dispatch(getUserSuccessAction(user));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getUserErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
