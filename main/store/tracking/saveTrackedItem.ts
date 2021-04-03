import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  saveTrackedItemAction,
  saveTrackedItemErrorAction,
  saveTrackedItemSuccessAction,
} from './trackingActions';
import { TrackItemRequest } from '../../domain/Tracking';

export const saveTrackedItemThunk = (request: TrackItemRequest) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(saveTrackedItemAction());

    Context.apiService.saveTrackedItem(request);

    console.log(request);

    dispatch(saveTrackedItemSuccessAction(request));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(saveTrackedItemErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
