import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getTrackedItemsAction,
  getTrackedItemsErrorAction,
  getTrackedItemsSuccessAction,
} from './trackingActions';
import { Tracking } from '../../domain/Tracking';

export const getTrackedItemsThunk = () => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getTrackedItemsAction());

    const tracketItems: Tracking[] = await Context.apiService.getTrackedItems();

    dispatch(getTrackedItemsSuccessAction(tracketItems));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getTrackedItemsErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
