import { Action } from 'redux';

export enum InitialStateActionType {
  SET_INITIAL_STATE = 'SET_INITIAL_STATE',
}

export interface SetInitialStateAction extends Action {
  type: InitialStateActionType;
}

export const setInitialStateAction = (): SetInitialStateAction => ({
  type: InitialStateActionType.SET_INITIAL_STATE,
});
