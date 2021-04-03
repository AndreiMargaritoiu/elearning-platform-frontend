import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  updateVideoAction,
  updateVideoErrorAction,
  updateVideoSuccessAction,
} from './videoActions';
import { Video, UpdateVideoRequest } from '../../domain/Video';

export const updateVideoThunk = (
  videoId: string,
  request: UpdateVideoRequest,
) => async (dispatch: Dispatch): Promise<Result<void, string>> => {
  try {
    dispatch(updateVideoAction());

    const video: Video = await Context.apiService.updateVideo(videoId, request);

    dispatch(updateVideoSuccessAction(video));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(updateVideoErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
