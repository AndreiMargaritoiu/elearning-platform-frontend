import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getInquiriesAction,
  getInquiriesSuccessAction,
  getInquiriesErrorAction,
} from './inquiriesActions';
import { Inquiry } from '../../domain/Inquiry';

export const getMyInquiriesThunk = () => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getInquiriesAction());

    const inquiriesResponse: Inquiry[] = await Context.apiService.getMyInquiries();

    dispatch(getInquiriesSuccessAction(inquiriesResponse));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getInquiriesErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
