import { Action } from 'redux';

import { TrackItemRequest } from '../../domain/Tracking';

export enum TrackingActionType {
  TRACK_ITEM = 'TRACK_ITEM',
  TRACK_ITEM_SUCCESS = 'TRACK_ITEM_SUCCESS',
  TRACK_ITEM_ERROR = 'TRACK_ITEM_ERROR',
}

export interface TrackItemAction extends Action {
  type: TrackingActionType.TRACK_ITEM;
}

export interface TrackItemSuccessAction extends Action {
  type: TrackingActionType.TRACK_ITEM_SUCCESS;
  payload: {
    trackedItem: TrackItemRequest;
  };
}

export interface TrackItemErrorAction extends Action {
  type: TrackingActionType.TRACK_ITEM_ERROR;
  payload: {
    error: Error;
  };
}

export const saveTrackedItemAction = (): TrackItemAction => ({
  type: TrackingActionType.TRACK_ITEM,
});

export const saveTrackedItemSuccessAction = (
  trackedItem: TrackItemRequest,
): TrackItemSuccessAction => ({
  type: TrackingActionType.TRACK_ITEM_SUCCESS,
  payload: { trackedItem },
});

export const saveTrackedItemErrorAction = (
  error: Error,
): TrackItemErrorAction => ({
  type: TrackingActionType.TRACK_ITEM_ERROR,
  payload: { error },
});
