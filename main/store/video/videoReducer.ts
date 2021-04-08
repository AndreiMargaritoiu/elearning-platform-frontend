import { Video } from '../../domain/Video';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import { GetVideoSuccessAction, VideoActionType } from './videoActions';

type ActionType = SetInitialStateAction | GetVideoSuccessAction;

export const initialState: Video = {
  videoUrl: '',
  uid: '',
  thumbnailUrl: '',
  description: '',
  id: '',
  title: '',
  createdAt: 0,
  searchIndex: [],
};

export const videoReducer = (
  videoState: Video = initialState,
  action: ActionType,
): Video => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case VideoActionType.GET_VIDEO_SUCCESS:
      return action.payload.video;
    default:
      return videoState;
  }
};
