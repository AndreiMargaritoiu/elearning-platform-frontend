import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getVideosAction,
  getVideosErrorAction,
  getVideosSuccessAction,
} from './videoActions';
import { GetVideosRequest, Video } from '../../domain/Video';

export const getVideosThunk = (request: GetVideosRequest) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getVideosAction());

    const videos: Video[] = await Context.apiService.getVideos(request);

    dispatch(getVideosSuccessAction(videos));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getVideosErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
