import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getWorkshopsAction,
  getWorkshopsErrorAction,
  getWorkshopsSuccessAction,
} from './workshopsActions';
import { Workshop } from '../../domain/Workshop';

export const getAllWorkshopsThunk = () => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getWorkshopsAction());

    const workshops: Workshop[] = await Context.apiService.getAllWorkshops();

    dispatch(getWorkshopsSuccessAction(workshops));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getWorkshopsErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
