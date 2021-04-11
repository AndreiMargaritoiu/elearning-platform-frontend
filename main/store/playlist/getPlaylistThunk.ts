import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getPlaylistAction,
  getPlaylistErrorAction,
  getPlaylistSuccessAction,
} from './playlistActions';
import { Playlist } from '../../domain/Playlist';

export const getPlaylistThunk = (playlistId: string) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getPlaylistAction());

    const playlist: Playlist = await Context.apiService.getPlaylist(playlistId);

    dispatch(getPlaylistSuccessAction(playlist));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getPlaylistErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
