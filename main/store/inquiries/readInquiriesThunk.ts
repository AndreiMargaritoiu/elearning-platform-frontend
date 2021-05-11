import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  readInquiriesAction,
  readInquiriesSuccessAction,
  readInquiriesErrorAction,
} from './inquiriesActions';

export const readInquiriesThunk = (inquiries: string[]) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(readInquiriesAction());

    await Context.apiService.readInquiries(inquiries);

    dispatch(readInquiriesSuccessAction(inquiries));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(readInquiriesErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
