import { Inquiry } from '../../domain/Inquiry';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  GetInquiriesSuccessAction,
  InquiriesActionType,
} from './inquiriesActions';

type ActionType = SetInitialStateAction | GetInquiriesSuccessAction;

export const initialState: Inquiry[] = [];

export const inquiriesReducer = (
  store = initialState,
  action: ActionType,
): Inquiry[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case InquiriesActionType.GET_INQUIRIES_SUCCESS:
      return {
        ...store,
        ...action.payload,
      };
    default:
      return store;
  }
};
