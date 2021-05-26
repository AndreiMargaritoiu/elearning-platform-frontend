import { Inquiry } from '../../domain/Inquiry';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  GetInquiriesSuccessAction,
  InquiriesActionType,
  ReadInquiriesSuccessAction,
  ReceiveInquirySuccessAction,
} from './inquiriesActions';

type ActionType =
  | SetInitialStateAction
  | GetInquiriesSuccessAction
  | ReadInquiriesSuccessAction
  | ReceiveInquirySuccessAction;

export const initialState: Inquiry[] = [];

export const inquiriesReducer = (
  inquiriesState = initialState,
  action: ActionType,
): Inquiry[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case InquiriesActionType.GET_INQUIRIES_SUCCESS:
      return action.payload.inquiries;
    case InquiriesActionType.RECEIVE_INQUIRY_SUCCESS:
      return [...inquiriesState, action.payload.inquiry];
    case InquiriesActionType.READ_INQUIRIES_SUCCESS:
      return inquiriesState.map((inquiry: Inquiry) =>
        action.payload.inquiries.includes(inquiry.id)
          ? {
              ...inquiry,
              read: true,
            }
          : inquiry,
      );
    default:
      return inquiriesState;
  }
};
