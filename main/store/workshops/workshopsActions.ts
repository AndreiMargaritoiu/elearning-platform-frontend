import { Action } from 'redux';

import { Workshop } from '../../domain/Workshop';

export enum WorkshopsActionType {
  GET_WORKSHOPS = 'GET_WORKSHOPS',
  GET_WORKSHOPS_SUCCESS = 'GET_WORKSHOPS_SUCCESS',
  GET_WORKSHOPS_ERROR = 'GET_WORKSHOPS_ERROR',
  ADD_WORKSHOP = 'ADD_WORKSHOP',
  ADD_WORKSHOP_SUCCESS = 'ADD_WORKSHOP_SUCCESS',
  ADD_WORKSHOP_ERROR = 'ADD_WORKSHOP_ERROR',
}

// Get
export interface GetWorkshopsAction extends Action {
  type: WorkshopsActionType.GET_WORKSHOPS;
}

export interface GetWorkshopsSuccessAction extends Action {
  type: WorkshopsActionType.GET_WORKSHOPS_SUCCESS;
  payload: {
    workshops: Workshop[];
  };
}

export interface GetWorkshopsErrorAction extends Action {
  type: WorkshopsActionType.GET_WORKSHOPS_ERROR;
  payload: {
    error: Error;
  };
}

export const getWorkshopsAction = (): GetWorkshopsAction => ({
  type: WorkshopsActionType.GET_WORKSHOPS,
});

export const getWorkshopsSuccessAction = (
  workshops: Workshop[],
): GetWorkshopsSuccessAction => ({
  type: WorkshopsActionType.GET_WORKSHOPS_SUCCESS,
  payload: { workshops },
});

export const getWorkshopsErrorAction = (
  error: Error,
): GetWorkshopsErrorAction => ({
  type: WorkshopsActionType.GET_WORKSHOPS_ERROR,
  payload: { error },
});

// Add
export interface AddWorkshopAction extends Action {
  type: WorkshopsActionType.ADD_WORKSHOP;
}

export interface AddWorkshopSuccessAction extends Action {
  type: WorkshopsActionType.ADD_WORKSHOP_SUCCESS;
  payload: {
    workshop: Workshop;
  };
}

export interface AddWorkshopErrorAction extends Action {
  type: WorkshopsActionType.ADD_WORKSHOP_ERROR;
  payload: {
    error: Error;
  };
}

export const AddWorkshopAction = (): AddWorkshopAction => ({
  type: WorkshopsActionType.ADD_WORKSHOP,
});

export const AddWorkshopSuccessAction = (
  workshop: Workshop,
): AddWorkshopSuccessAction => ({
  type: WorkshopsActionType.ADD_WORKSHOP_SUCCESS,
  payload: { workshop },
});

export const AddWorkshopErrorAction = (
  error: Error,
): AddWorkshopErrorAction => ({
  type: WorkshopsActionType.ADD_WORKSHOP_ERROR,
  payload: { error },
});
