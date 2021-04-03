import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getUsersAction,
  getUsersErrorAction,
  getUsersSuccessAction,
} from './userActions';
import { User } from '../../domain/User';

export const getUsersThunk = () => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getUsersAction());

    const usersResponse: User[] = await Context.apiService.getUsers();

    console.log(usersResponse);

    dispatch(getUsersSuccessAction(usersResponse));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getUsersErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
