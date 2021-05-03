import { Video } from '../../domain/Video';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  AddVideoSuccessAction,
  DeleteVideoSuccessAction,
  GetVideosSuccessAction,
  UpdateVideoSuccessAction,
  VideosActionType,
} from './videosActions';

type ActionType =
  | SetInitialStateAction
  | GetVideosSuccessAction
  | AddVideoSuccessAction
  | UpdateVideoSuccessAction
  | DeleteVideoSuccessAction;

export const initialState: Video[] = [];

export const videosReducer = (
  videosState: Video[] = initialState,
  action: ActionType,
): Video[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case VideosActionType.GET_VIDEOS_SUCCESS:
      return action.payload.videos;
    case VideosActionType.ADD_VIDEO_SUCCESS:
      return {
        ...videosState,
        ...action.payload.video,
      };
    case VideosActionType.UPDATE_VIDEO_SUCCESS:
      return videosState.map((video: Video) =>
        video.id === action.payload.video.id
          ? {
              ...video,
              description: action.payload.video.description,
              title: action.payload.video.title,
              searchIndex: action.payload.video.searchIndex,
            }
          : video,
      );
    case VideosActionType.DELETE_VIDEO_SUCCESS:
      return videosState.filter(
        (video: Video) => video.id !== action.payload.videoId,
      );
    default:
      return videosState;
  }
};
