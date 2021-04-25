import { Workshop } from '../../domain/Workshop';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  AddWorkshopSuccessAction,
  GetWorkshopsSuccessAction,
  WorkshopsActionType,
} from './workshopsActions';

type ActionType =
  | SetInitialStateAction
  | GetWorkshopsSuccessAction
  | AddWorkshopSuccessAction;

export const initialState: Workshop[] = [];

export const workshopsReducer = (
  workshopsState: Workshop[] = initialState,
  action: ActionType,
): Workshop[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case WorkshopsActionType.GET_WORKSHOPS_SUCCESS:
      return action.payload.workshops;
    case WorkshopsActionType.ADD_WORKSHOP_SUCCESS:
      return {
        ...workshopsState,
        ...action.payload.workshop,
      };
    default:
      return workshopsState;
  }
};
