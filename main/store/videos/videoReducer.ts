import { Video } from '../../domain/Video';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  DeleteVideoSuccessAction,
  GetVideosSuccessAction,
  UpdateVideoSuccessAction,
  VideoActionType,
} from './videoActions';

type ActionType =
  | SetInitialStateAction
  | GetVideosSuccessAction
  | UpdateVideoSuccessAction
  | DeleteVideoSuccessAction;

export const initialState: Video[] = [];

export const videosReducer = (
  mentoringState: Video[] = initialState,
  action: ActionType,
): Video[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case VideoActionType.GET_VIDEOS_SUCCESS:
      return action.payload.videos;
    case VideoActionType.UPDATE_VIDEO_SUCCESS:
      return mentoringState.map((video: Video) =>
        video.id === action.payload.video.id
          ? {
              ...video,
              description: action.payload.video.description,
              title: action.payload.video.title,
              searchIndex: action.payload.video.searchIndex,
            }
          : video,
      );
    case VideoActionType.DELETE_VIDEO_SUCCESS:
      return mentoringState.filter(
        (video: Video) => video.id !== action.payload.videoId,
      );
    default:
      return mentoringState;
  }
};
