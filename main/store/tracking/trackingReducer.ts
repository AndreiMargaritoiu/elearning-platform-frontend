import { TrackItemRequest } from '../../domain/Tracking';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import { TrackingActionType, TrackItemSuccessAction } from './trackingActions';

type ActionType = SetInitialStateAction | TrackItemSuccessAction;

export const initialState: TrackItemRequest = {
  vid: '',
  uid: '',
};

export const appUserReducer = (
  store = initialState,
  action: ActionType,
): TrackItemRequest => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case TrackingActionType.TRACK_ITEM_SUCCESS:
      return {
        ...store,
        ...action.payload,
      };
    default:
      return store;
  }
};
