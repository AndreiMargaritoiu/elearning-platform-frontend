import { GetVideosResponse } from '../../domain/Video';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import { GetVideosSuccessAction, VideosActionType } from './videosActions';

type ActionType = SetInitialStateAction | GetVideosSuccessAction;

export const initialState: GetVideosResponse = {
  videos: [],
};

export const videosReducer = (
  store = initialState,
  action: ActionType,
): GetVideosResponse => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case VideosActionType.GET_VIDEOS_SUCCESS:
      return {
        ...store,
        ...action.payload,
      };
    default:
      return store;
  }
};
