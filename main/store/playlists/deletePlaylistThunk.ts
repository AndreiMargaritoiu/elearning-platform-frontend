import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  deletePlaylistAction,
  deletePlaylistErrorAction,
  deletePlaylistSuccessAction,
} from './playlistActions';

export const deletePlaylistThunk = (playlistId: string) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(deletePlaylistAction());

    Context.apiService.deletePlaylist(playlistId);

    dispatch(deletePlaylistSuccessAction(playlistId));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(deletePlaylistErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
