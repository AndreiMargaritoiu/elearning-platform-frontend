import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  deleteVideoAction,
  deleteVideoErrorAction,
  deleteVideoSuccessAction,
} from './videosActions';

export const deleteVideoThunk = (videoId: string) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(deleteVideoAction());

    Context.apiService.deleteVideo(videoId);

    dispatch(deleteVideoSuccessAction(videoId));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(deleteVideoErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
