import { Action } from 'redux';

import { Mentorship } from '../../domain/Mentorship';

export enum MentorshipActionType {
  GET_MENTORSHIPS = 'GET_MENTORSHIPS',
  GET_MENTORSHIPS_SUCCESS = 'GET_MENTORSHIPS_SUCCESS',
  GET_MENTORSHIPS_ERROR = 'GET_MENTORSHIPS_ERROR',
  ADD_MENTORSHIP = 'ADD_MENTORSHIP',
  ADD_MENTORSHIP_SUCCESS = 'ADD_MENTORSHIP_SUCCESS',
  ADD_MENTORSHIP_ERROR = 'ADD_MENTORSHIP_ERROR',
  UPDATE_MENTORSHIP = 'UPDATE_MENTORSHIP',
  UPDATE_MENTORSHIP_SUCCESS = 'UPDATE_MENTORSHIP_SUCCESS',
  UPDATE_MENTORSHIP_ERROR = 'UPDATE_MENTORSHIP_ERROR',
  DELETE_MENTORSHIP = 'DELETE_MENTORSHIP',
  DELETE_MENTORSHIP_SUCCESS = 'DELETE_MENTORSHIP_SUCCESS',
  DELETE_MENTORSHIP_ERROR = 'DELETE_MENTORSHIP_ERROR',
}

// Get
export interface GetMentorshipsAction extends Action {
  type: MentorshipActionType.GET_MENTORSHIPS;
}

export interface GetMentorshipsSuccessAction extends Action {
  type: MentorshipActionType.GET_MENTORSHIPS_SUCCESS;
  payload: {
    mentorships: Mentorship[];
  };
}

export interface GetMentorshipsErrorAction extends Action {
  type: MentorshipActionType.GET_MENTORSHIPS_ERROR;
  payload: {
    error: Error;
  };
}

export const getMentorshipsAction = (): GetMentorshipsAction => ({
  type: MentorshipActionType.GET_MENTORSHIPS,
});

export const getMentorshipsSuccessAction = (
  mentorships: Mentorship[],
): GetMentorshipsSuccessAction => ({
  type: MentorshipActionType.GET_MENTORSHIPS_SUCCESS,
  payload: { mentorships },
});

export const getMentorshipsErrorAction = (
  error: Error,
): GetMentorshipsErrorAction => ({
  type: MentorshipActionType.GET_MENTORSHIPS_ERROR,
  payload: { error },
});

// Add
export interface AddMentorshipAction extends Action {
  type: MentorshipActionType.ADD_MENTORSHIP;
}

export interface AddMentorshipSuccessAction extends Action {
  type: MentorshipActionType.ADD_MENTORSHIP_SUCCESS;
  payload: {
    mentorship: Mentorship;
  };
}

export interface AddMentorshipErrorAction extends Action {
  type: MentorshipActionType.ADD_MENTORSHIP_ERROR;
  payload: {
    error: Error;
  };
}

export const addMentorshipAction = (): AddMentorshipAction => ({
  type: MentorshipActionType.ADD_MENTORSHIP,
});

export const addMentorshipSuccessAction = (
  mentorship: Mentorship,
): AddMentorshipSuccessAction => ({
  type: MentorshipActionType.ADD_MENTORSHIP_SUCCESS,
  payload: { mentorship },
});

export const addMentorshipErrorAction = (
  error: Error,
): AddMentorshipErrorAction => ({
  type: MentorshipActionType.ADD_MENTORSHIP_ERROR,
  payload: { error },
});

// Update
export interface UpdateMentorshipAction extends Action {
  type: MentorshipActionType.UPDATE_MENTORSHIP;
}

export interface UpdateMentorshipSuccessAction extends Action {
  type: MentorshipActionType.UPDATE_MENTORSHIP_SUCCESS;
  payload: {
    mentorship: Mentorship;
  };
}

export interface UpdateMentorshipErrorAction extends Action {
  type: MentorshipActionType.UPDATE_MENTORSHIP_ERROR;
  payload: {
    error: Error;
  };
}

export const updateMentorshipAction = (): UpdateMentorshipAction => ({
  type: MentorshipActionType.UPDATE_MENTORSHIP,
});

export const updateMentorshipSuccessAction = (
  mentorship: Mentorship,
): UpdateMentorshipSuccessAction => ({
  type: MentorshipActionType.UPDATE_MENTORSHIP_SUCCESS,
  payload: { mentorship },
});

export const updateMentorshipErrorAction = (
  error: Error,
): UpdateMentorshipErrorAction => ({
  type: MentorshipActionType.UPDATE_MENTORSHIP_ERROR,
  payload: { error },
});

// Delete
export interface DeleteMentorshipAction extends Action {
  type: MentorshipActionType.DELETE_MENTORSHIP;
}

export interface DeleteMentorshipSuccessAction extends Action {
  type: MentorshipActionType.DELETE_MENTORSHIP_SUCCESS;
  payload: {
    mentorshipId: string;
  };
}

export interface DeleteMentorshipErrorAction extends Action {
  type: MentorshipActionType.DELETE_MENTORSHIP_ERROR;
  payload: {
    error: Error;
  };
}

export const deleteMentorshipAction = (): DeleteMentorshipAction => ({
  type: MentorshipActionType.DELETE_MENTORSHIP,
});

export const deleteMentorshipSuccessAction = (
  mentorshipId: string,
): DeleteMentorshipSuccessAction => ({
  type: MentorshipActionType.DELETE_MENTORSHIP_SUCCESS,
  payload: { mentorshipId },
});

export const deleteMentorshipErrorAction = (
  error: Error,
): DeleteMentorshipErrorAction => ({
  type: MentorshipActionType.DELETE_MENTORSHIP_ERROR,
  payload: { error },
});
