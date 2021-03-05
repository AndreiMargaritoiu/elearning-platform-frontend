import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getPlaylistsAction,
  getPlaylistsErrorAction,
  getPlaylistsSuccessAction,
} from './playlistsActions';
import { GetPlaylistsResponse } from '../../domain/Playlist';

export const getPlaylistsThunk = () => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getPlaylistsAction());

    console.log('we are here');

    const playlistsResponse: GetPlaylistsResponse = await Context.apiService.getPlaylists();

    dispatch(
      getPlaylistsSuccessAction({ playlists: playlistsResponse.playlists! }),
    );

    console.log('we are also here');

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getPlaylistsErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
