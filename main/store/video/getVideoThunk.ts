import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getVideoAction,
  getVideoErrorAction,
  getVideoSuccessAction,
} from './videoActions';
import { Video } from '../../domain/Video';

export const getVideoThunk = (videoId: string) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getVideoAction());

    const video: Video = await Context.apiService.getVideo(videoId);

    dispatch(getVideoSuccessAction(video));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getVideoErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
