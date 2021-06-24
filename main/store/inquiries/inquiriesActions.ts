import { Action } from 'redux';
import { Inquiry } from '../../domain/Inquiry';
export enum InquiriesActionType {
  GET_INQUIRIES = 'GET_INQUIRIES',
  GET_INQUIRIES_SUCCESS = 'GET_INQUIRIES_SUCCESS',
  GET_INQUIRIES_ERROR = 'GET_INQUIRIES_ERROR',
  SEND_INQUIRY = 'SEND_INQUIRY',
  SEND_INQUIRY_SUCCESS = 'SEND_INQUIRY_SUCCESS',
  SEND_INQUIRY_ERROR = 'SEND_INQUIRY_ERROR',
  READ_INQUIRIES = 'READ_INQUIRIES',
  READ_INQUIRIES_SUCCESS = 'READ_INQUIRIES_SUCCESS',
  READ_INQUIRIES_ERROR = 'READ_INQUIRIES_ERROR',
}

export interface GetInquiriesAction extends Action {
  type: InquiriesActionType.GET_INQUIRIES;
}
export interface GetInquiriesSuccessAction extends Action {
  type: InquiriesActionType.GET_INQUIRIES_SUCCESS;
  payload: {
    inquiries: Inquiry[];
  };
}
export interface GetInquiriesErrorAction extends Action {
  type: InquiriesActionType.GET_INQUIRIES_ERROR;
  payload: {
    error: Error;
  };
}
export interface ReadInquiriesAction extends Action {
  type: InquiriesActionType.READ_INQUIRIES;
}
export interface ReadInquiriesSuccessAction extends Action {
  type: InquiriesActionType.READ_INQUIRIES_SUCCESS;
  payload: {
    inquiries: string[];
  };
}
export interface ReadInquiriesErrorAction extends Action {
  type: InquiriesActionType.READ_INQUIRIES_ERROR;
  payload: {
    error: Error;
  };
}
export interface SendInquiryAction extends Action {
  type: InquiriesActionType.SEND_INQUIRY;
}
export interface SendInquirySuccessAction extends Action {
  type: InquiriesActionType.SEND_INQUIRY_SUCCESS;
  payload: {
    inquiry: Inquiry;
  };
}
export interface SendInquiryErrorAction extends Action {
  type: InquiriesActionType.SEND_INQUIRY_ERROR;
  payload: {
    error: Error;
  };
}
export const getInquiriesAction = (): GetInquiriesAction => ({
  type: InquiriesActionType.GET_INQUIRIES,
});
export const getInquiriesSuccessAction = (
  inquiries: Inquiry[],
): GetInquiriesSuccessAction => ({
  type: InquiriesActionType.GET_INQUIRIES_SUCCESS,
  payload: { inquiries },
});
export const getInquiriesErrorAction = (
  error: Error,
): GetInquiriesErrorAction => ({
  type: InquiriesActionType.GET_INQUIRIES_ERROR,
  payload: { error },
});
export const readInquiriesAction = (): ReadInquiriesAction => ({
  type: InquiriesActionType.READ_INQUIRIES,
});
export const readInquiriesSuccessAction = (
  inquiries: string[],
): ReadInquiriesSuccessAction => ({
  type: InquiriesActionType.READ_INQUIRIES_SUCCESS,
  payload: { inquiries },
});
export const readInquiriesErrorAction = (
  error: Error,
): ReadInquiriesErrorAction => ({
  type: InquiriesActionType.READ_INQUIRIES_ERROR,
  payload: { error },
});
export const sendInquiryAction = (): SendInquiryAction => ({
  type: InquiriesActionType.SEND_INQUIRY,
});
export const sendInquirySuccessAction = (
  inquiry: Inquiry,
): SendInquirySuccessAction => ({
  type: InquiriesActionType.SEND_INQUIRY_SUCCESS,
  payload: { inquiry },
});
export const sendInquiryErrorAction = (
  error: Error,
): SendInquiryErrorAction => ({
  type: InquiriesActionType.SEND_INQUIRY_ERROR,
  payload: { error },
});
