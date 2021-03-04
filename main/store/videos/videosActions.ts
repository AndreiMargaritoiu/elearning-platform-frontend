import { Action } from 'redux';
import { Video } from '../../domain/Video';

export enum VideosActionType {
  GET_VIDEOS = 'GET_VIDEOS',
  GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS',
  GET_VIDEOS_ERROR = 'GET_VIDEOS_ERROR',
}

export interface GetVideosAction extends Action {
  type: VideosActionType.GET_VIDEOS;
}

export interface GetVideosSuccessAction extends Action {
  type: VideosActionType.GET_VIDEOS_SUCCESS;
  payload: {
    videos: Video[];
  };
}

export interface GetVideosErrorAction extends Action {
  type: VideosActionType.GET_VIDEOS_ERROR;
  payload: {
    error: Error;
  };
}

export const getVideosAction = (): GetVideosAction => ({
  type: VideosActionType.GET_VIDEOS,
});

export const getVideosSuccessAction = ({
  videos,
}: {
  videos: Video[];
}): GetVideosSuccessAction => ({
  type: VideosActionType.GET_VIDEOS_SUCCESS,
  payload: { videos },
});

export const getVideosErrorAction = (error: Error): GetVideosErrorAction => ({
  type: VideosActionType.GET_VIDEOS_ERROR,
  payload: { error },
});
