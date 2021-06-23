import { Inquiry } from '../../domain/Inquiry';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  GetInquiriesSuccessAction,
  InquiriesActionType,
  ReadInquiriesAction,
  ReadInquiriesSuccessAction,
} from './inquiriesActions';

export const initialState: Inquiry[] = [];

type ActionType =
  | SetInitialStateAction
  | GetInquiriesSuccessAction
  | ReadInquiriesSuccessAction;

export const inquiriesReducer = (
  inquiriesState = initialState,
  action: ActionType,
): Inquiry[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case InquiriesActionType.GET_INQUIRIES_SUCCESS:
      return action.payload.inquiries;
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
