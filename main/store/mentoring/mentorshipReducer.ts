import { Mentorship } from '../../domain/Mentorship';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  AddMentorshipSuccessAction,
  DeleteMentorshipSuccessAction,
  GetMentorshipsSuccessAction,
  MentorshipActionType,
  UpdateMentorshipSuccessAction,
} from './mentorshipActions';

type ActionType =
  | SetInitialStateAction
  | GetMentorshipsSuccessAction
  | AddMentorshipSuccessAction
  | UpdateMentorshipSuccessAction
  | DeleteMentorshipSuccessAction;

export const initialState: Mentorship[] = [];

export const mentorshipsReducer = (
  mentoringState: Mentorship[] = initialState,
  action: ActionType,
): Mentorship[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case MentorshipActionType.GET_MENTORSHIPS_SUCCESS:
      return action.payload.mentorships;
    case MentorshipActionType.ADD_MENTORSHIP_SUCCESS:
      return {
        ...mentoringState,
        ...action.payload.mentorship,
      };
    case MentorshipActionType.UPDATE_MENTORSHIP_SUCCESS:
      return mentoringState.map((mentorship: Mentorship) =>
        mentorship.id === action.payload.mentorship.id
          ? {
              ...mentorship,
              description: action.payload.mentorship.description,
              price: action.payload.mentorship.price,
            }
          : mentorship,
      );
    case MentorshipActionType.DELETE_MENTORSHIP_SUCCESS:
      return mentoringState.filter(
        (mentorship: Mentorship) =>
          mentorship.id !== action.payload.mentorshipId,
      );
    default:
      return mentoringState;
  }
};
