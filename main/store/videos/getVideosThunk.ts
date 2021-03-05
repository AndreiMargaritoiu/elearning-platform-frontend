import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getVideosAction,
  getVideosErrorAction,
  getVideosSuccessAction,
} from './videosActions';
import { GetVideosResponse } from '../../domain/Video';

export const getVideosThunk = () => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getVideosAction());

    const VideosResponse: GetVideosResponse = await Context.apiService.getVideos();

    dispatch(getVideosSuccessAction({ videos: VideosResponse.videos }));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getVideosErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
