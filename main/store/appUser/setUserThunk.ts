import { Dispatch } from 'redux';
import { Context } from '../../Context';

import { Result, resultFormatter } from '../../domain/Result';
import { User } from '../../domain/User';
import { setUser } from './appUserAction';

export const setUserThunk = (user: User) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(setUser(user));

    Context.notificationsWebSocketService.initWebSocket(dispatch, user);

    return resultFormatter.ok<void, string>();
  } catch (e) {
    return resultFormatter.error<void, string>(e);
  }
};
