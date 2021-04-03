import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getPlaylistsAction,
  getPlaylistsErrorAction,
  getPlaylistsSuccessAction,
} from './playlistActions';
import { GetPlaylistsRequest, Playlist } from '../../domain/Playlist';

export const getPlaylistsThunk = (request: GetPlaylistsRequest) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getPlaylistsAction());

    const playlistsResponse: Playlist[] = await Context.apiService.getPlaylists(
      request,
    );

    console.log(playlistsResponse);

    dispatch(getPlaylistsSuccessAction(playlistsResponse));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getPlaylistsErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
