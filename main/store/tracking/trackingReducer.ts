import { Tracking, TrackItemRequest } from '../../domain/Tracking';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  GetTrackedItemsSuccessAction,
  TrackingActionType,
  TrackItemSuccessAction,
} from './trackingActions';

type ActionType =
  | SetInitialStateAction
  | TrackItemSuccessAction
  | GetTrackedItemsSuccessAction;

export const initialState: Tracking[] = [];

export const trackingReducer = (
  store = initialState,
  action: ActionType,
): Tracking[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case TrackingActionType.GET_TRACKED_ITEMS_SUCCESS:
      return action.payload.trackedItems;
    case TrackingActionType.TRACK_ITEM_SUCCESS:
      return {
        ...store,
        ...action.payload.trackedItem,
      };
    default:
      return store;
  }
};
