import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  saveTrackedItemAction,
  saveTrackedItemErrorAction,
  saveTrackedItemSuccessAction,
} from './trackingActions';
import { Tracking, TrackItemRequest } from '../../domain/Tracking';

export const saveTrackedItemThunk = (request: TrackItemRequest) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(saveTrackedItemAction());

    const tracketItem: Tracking = await Context.apiService.saveTrackedItem(
      request,
    );

    dispatch(saveTrackedItemSuccessAction(tracketItem));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(saveTrackedItemErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
