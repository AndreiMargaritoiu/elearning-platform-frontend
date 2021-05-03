import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  addPlaylistAction,
  addPlaylistErrorAction,
  addPlaylistSuccessAction,
} from './playlistsActions';
import { AddPlaylistRequest, Playlist } from '../../domain/Playlist';

export const addPlaylistThunk = (request: AddPlaylistRequest) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(addPlaylistAction());

    const playlist: Playlist = await Context.apiService.addPlaylist(request);

    dispatch(addPlaylistSuccessAction(playlist));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(addPlaylistErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
