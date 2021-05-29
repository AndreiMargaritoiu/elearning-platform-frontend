import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  registerToWorkshopAction,
  registerToWorkshopErrorAction,
  registerToWorkshopSuccessAction,
} from './workshopsActions';
import { Workshop } from '../../domain/Workshop';

export const registerToWorkshopThunk = (workshopId: string) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(registerToWorkshopAction());

    const workshop: Workshop = await Context.apiService.registerToWorkshop(
      workshopId,
    );

    dispatch(registerToWorkshopSuccessAction(workshop));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(registerToWorkshopErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
