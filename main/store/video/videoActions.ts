import { Action } from 'redux';

import { Video } from '../../domain/Video';

export enum VideoActionType {
  GET_VIDEO = 'GET_VIDEO',
  GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS',
  GET_VIDEO_ERROR = 'GET_VIDEOS_ERROR',
}

// Get
export interface GetVideoAction extends Action {
  type: VideoActionType.GET_VIDEO;
}

export interface GetVideoSuccessAction extends Action {
  type: VideoActionType.GET_VIDEO_SUCCESS;
  payload: {
    video: Video;
  };
}

export interface GetVideoErrorAction extends Action {
  type: VideoActionType.GET_VIDEO_ERROR;
  payload: {
    error: Error;
  };
}

export const getVideoAction = (): GetVideoAction => ({
  type: VideoActionType.GET_VIDEO,
});

export const getVideoSuccessAction = (video: Video): GetVideoSuccessAction => ({
  type: VideoActionType.GET_VIDEO_SUCCESS,
  payload: { video },
});

export const getVideoErrorAction = (error: Error): GetVideoErrorAction => ({
  type: VideoActionType.GET_VIDEO_ERROR,
  payload: { error },
});
