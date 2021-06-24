import { Dispatch } from 'redux';
import { Context } from '../../Context';
import { Inquiry } from '../../domain/Inquiry';
import { Result, resultFormatter } from '../../domain/Result';
import {
  getInquiriesAction,
  getInquiriesErrorAction,
  getInquiriesSuccessAction,
} from './inquiriesActions';

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
