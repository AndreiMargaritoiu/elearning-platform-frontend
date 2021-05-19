import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import { UpdateUserRequest, User } from '../../domain/User';
import {
  updateUserAction,
  updateUserErrorAction,
  updateUserSuccessAction,
} from './appUserAction';

export const updateAppUserThunk = (
  userId: string,
  request: UpdateUserRequest,
) => async (dispatch: Dispatch): Promise<Result<void, string>> => {
  try {
    dispatch(updateUserAction());

    const user: User = await Context.apiService.updateUser(userId, request);

    dispatch(updateUserSuccessAction(user));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(updateUserErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
