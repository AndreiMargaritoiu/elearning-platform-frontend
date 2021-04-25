import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getPlaylistsAction,
  getPlaylistsErrorAction,
  getPlaylistsSuccessAction,
} from './playlistsActions';
import { Playlist } from '../../domain/Playlist';
import { SearchPlaylistsRequest } from '../../domain/SearchPlaylistsRequest';

export const getPlaylistsThunk = (request: SearchPlaylistsRequest) => async (
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
