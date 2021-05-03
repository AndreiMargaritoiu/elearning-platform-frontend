import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  addVideoAction,
  addVideoErrorAction,
  addVideoSuccessAction,
} from './videosActions';
import { AddVideoRequest, Video } from '../../domain/Video';

export const addVideoThunk = (request: AddVideoRequest) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(addVideoAction());

    const video: Video = await Context.apiService.addVideo(request);

    dispatch(addVideoSuccessAction(video));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(addVideoErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
