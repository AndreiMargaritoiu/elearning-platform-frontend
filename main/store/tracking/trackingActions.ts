import { Action } from 'redux';

import { Tracking, TrackItemRequest } from '../../domain/Tracking';

export enum TrackingActionType {
  TRACK_ITEM = 'TRACK_ITEM',
  TRACK_ITEM_SUCCESS = 'TRACK_ITEM_SUCCESS',
  TRACK_ITEM_ERROR = 'TRACK_ITEM_ERROR',
  GET_TRACKED_ITEMS = 'GET_TRACKED_ITEMS',
  GET_TRACKED_ITEMS_SUCCESS = 'GET_TRACKED_ITEMS_SUCCESS',
  GET_TRACKED_ITEMS_ERROR = 'GET_TRACKED_ITEMS_ERROR',
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

export interface GetTrackedItemsAction extends Action {
  type: TrackingActionType.GET_TRACKED_ITEMS;
}

export interface GetTrackedItemsSuccessAction extends Action {
  type: TrackingActionType.GET_TRACKED_ITEMS_SUCCESS;
  payload: {
    trackedItems: Tracking[];
  };
}

export interface GetTrackedItemsErrorAction extends Action {
  type: TrackingActionType.GET_TRACKED_ITEMS_ERROR;
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

export const getTrackedItemsAction = (): GetTrackedItemsAction => ({
  type: TrackingActionType.GET_TRACKED_ITEMS,
});

export const getTrackedItemsSuccessAction = (
  trackedItems: Tracking[],
): GetTrackedItemsSuccessAction => ({
  type: TrackingActionType.GET_TRACKED_ITEMS_SUCCESS,
  payload: { trackedItems },
});

export const getTrackedItemsErrorAction = (
  error: Error,
): GetTrackedItemsErrorAction => ({
  type: TrackingActionType.GET_TRACKED_ITEMS_ERROR,
  payload: { error },
});
