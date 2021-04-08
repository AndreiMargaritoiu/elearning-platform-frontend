import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  updatePlaylistAction,
  updatePlaylistErrorAction,
  updatePlaylistSuccessAction,
} from './playlistsActions';
import { Playlist, UpdatePlaylistRequest } from '../../domain/Playlist';

export const updatePlaylistThunk = (
  playlistId: string,
  request: UpdatePlaylistRequest,
) => async (dispatch: Dispatch): Promise<Result<void, string>> => {
  try {
    dispatch(updatePlaylistAction());

    const playlist: Playlist = await Context.apiService.updatePlaylist(
      playlistId,
      request,
    );

    dispatch(updatePlaylistSuccessAction(playlist));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(updatePlaylistErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
