import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  addWorkshopAction,
  addWorkshopErrorAction,
  addWorkshopSuccessAction,
} from './workshopsActions';
import { AddWorkshopRequest, Workshop } from '../../domain/Workshop';

export const addWorkshopThunk = (request: AddWorkshopRequest) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(addWorkshopAction());

    const workshop: Workshop = await Context.apiService.addWorkshop(request);

    dispatch(addWorkshopSuccessAction(workshop));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(addWorkshopErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
