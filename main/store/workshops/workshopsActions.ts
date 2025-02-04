import { Action } from 'redux';

import { Workshop } from '../../domain/Workshop';

export enum WorkshopsActionType {
  GET_WORKSHOPS = 'GET_WORKSHOPS',
  GET_WORKSHOPS_SUCCESS = 'GET_WORKSHOPS_SUCCESS',
  GET_WORKSHOPS_ERROR = 'GET_WORKSHOPS_ERROR',
  ADD_WORKSHOP = 'ADD_WORKSHOP',
  ADD_WORKSHOP_SUCCESS = 'ADD_WORKSHOP_SUCCESS',
  ADD_WORKSHOP_ERROR = 'ADD_WORKSHOP_ERROR',
  REGISTER_TO_WORKSHOP = 'REGISTER_TO_WORKSHOP',
  REGISTER_TO_WORKSHOP_SUCCESS = 'REGISTER_TO_WORKSHOP_SUCCESS',
  REGISTER_TO_WORKSHOP_ERROR = 'REGISTER_TO_WORKSHOP_ERROR',
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

export const addWorkshopAction = (): AddWorkshopAction => ({
  type: WorkshopsActionType.ADD_WORKSHOP,
});

export const addWorkshopSuccessAction = (
  workshop: Workshop,
): AddWorkshopSuccessAction => ({
  type: WorkshopsActionType.ADD_WORKSHOP_SUCCESS,
  payload: { workshop },
});

export const addWorkshopErrorAction = (
  error: Error,
): AddWorkshopErrorAction => ({
  type: WorkshopsActionType.ADD_WORKSHOP_ERROR,
  payload: { error },
});

// update
export interface RegisterToWorkshopAction extends Action {
  type: WorkshopsActionType.REGISTER_TO_WORKSHOP;
}

export interface RegisterToWorkshopSuccessAction extends Action {
  type: WorkshopsActionType.REGISTER_TO_WORKSHOP_SUCCESS;
  payload: {
    workshop: Workshop;
  };
}

export interface RegisterToWorkshopErrorAction extends Action {
  type: WorkshopsActionType.REGISTER_TO_WORKSHOP_ERROR;
  payload: {
    error: Error;
  };
}

export const registerToWorkshopAction = (): RegisterToWorkshopAction => ({
  type: WorkshopsActionType.REGISTER_TO_WORKSHOP,
});

export const registerToWorkshopSuccessAction = (
  workshop: Workshop,
): RegisterToWorkshopSuccessAction => ({
  type: WorkshopsActionType.REGISTER_TO_WORKSHOP_SUCCESS,
  payload: { workshop },
});

export const registerToWorkshopErrorAction = (
  error: Error,
): RegisterToWorkshopErrorAction => ({
  type: WorkshopsActionType.REGISTER_TO_WORKSHOP_ERROR,
  payload: { error },
});
