import { Action } from 'redux';

import { Video } from '../../domain/Video';

export enum VideoActionType {
  GET_VIDEOS = 'GET_VIDEOS',
  GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS',
  GET_VIDEOS_ERROR = 'GET_VIDEOS_ERROR',
  UPDATE_VIDEO = 'UPDATE_VIDEO',
  UPDATE_VIDEO_SUCCESS = 'UPDATE_VIDEO_SUCCESS',
  UPDATE_VIDEO_ERROR = 'UPDATE_VIDEO_ERROR',
  DELETE_VIDEO = 'DELETE_VIDEO',
  DELETE_VIDEO_SUCCESS = 'DELETE_VIDEO_SUCCESS',
  DELETE_VIDEO_ERROR = 'DELETE_VIDEO_ERROR',
}

// Get
export interface GetVideosAction extends Action {
  type: VideoActionType.GET_VIDEOS;
}

export interface GetVideosSuccessAction extends Action {
  type: VideoActionType.GET_VIDEOS_SUCCESS;
  payload: {
    videos: Video[];
  };
}

export interface GetVideosErrorAction extends Action {
  type: VideoActionType.GET_VIDEOS_ERROR;
  payload: {
    error: Error;
  };
}

export const getVideosAction = (): GetVideosAction => ({
  type: VideoActionType.GET_VIDEOS,
});

export const getVideosSuccessAction = (
  videos: Video[],
): GetVideosSuccessAction => ({
  type: VideoActionType.GET_VIDEOS_SUCCESS,
  payload: { videos },
});

export const getVideosErrorAction = (error: Error): GetVideosErrorAction => ({
  type: VideoActionType.GET_VIDEOS_ERROR,
  payload: { error },
});

// Update
export interface UpdateVideoAction extends Action {
  type: VideoActionType.UPDATE_VIDEO;
}

export interface UpdateVideoSuccessAction extends Action {
  type: VideoActionType.UPDATE_VIDEO_SUCCESS;
  payload: {
    video: Video;
  };
}

export interface UpdateVideoErrorAction extends Action {
  type: VideoActionType.UPDATE_VIDEO_ERROR;
  payload: {
    error: Error;
  };
}

export const updateVideoAction = (): UpdateVideoAction => ({
  type: VideoActionType.UPDATE_VIDEO,
});

export const updateVideoSuccessAction = (
  video: Video,
): UpdateVideoSuccessAction => ({
  type: VideoActionType.UPDATE_VIDEO_SUCCESS,
  payload: { video },
});

export const updateVideoErrorAction = (
  error: Error,
): UpdateVideoErrorAction => ({
  type: VideoActionType.UPDATE_VIDEO_ERROR,
  payload: { error },
});

// Delete
export interface DeleteVideoAction extends Action {
  type: VideoActionType.DELETE_VIDEO;
}

export interface DeleteVideoSuccessAction extends Action {
  type: VideoActionType.DELETE_VIDEO_SUCCESS;
  payload: {
    videoId: string;
  };
}

export interface DeleteVideoErrorAction extends Action {
  type: VideoActionType.DELETE_VIDEO_ERROR;
  payload: {
    error: Error;
  };
}

export const deleteVideoAction = (): DeleteVideoAction => ({
  type: VideoActionType.DELETE_VIDEO,
});

export const deleteVideoSuccessAction = (
  videoId: string,
): DeleteVideoSuccessAction => ({
  type: VideoActionType.DELETE_VIDEO_SUCCESS,
  payload: { videoId },
});

export const deleteVideoErrorAction = (
  error: Error,
): DeleteVideoErrorAction => ({
  type: VideoActionType.DELETE_VIDEO_ERROR,
  payload: { error },
});
