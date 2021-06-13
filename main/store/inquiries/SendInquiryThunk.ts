import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import { Inquiry, SendInquiryRequest } from '../../domain/Inquiry';
import {
  sendInquiryAction,
  sendInquiryErrorAction,
  sendInquirySuccessAction,
} from './inquiriesActions';

export const sendInquiryThunk = (request: SendInquiryRequest) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(sendInquiryAction());

    const inquiry: Inquiry = await Context.apiService.sendInquiry(request);

    dispatch(sendInquirySuccessAction(inquiry));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(sendInquiryErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
