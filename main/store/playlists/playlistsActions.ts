import { Action } from 'redux';
import { Playlist } from '../../domain/Playlist';

export enum PlaylistsActionType {
  GET_PLAYLISTS = 'GET_PLAYLISTS',
  GET_PLAYLISTS_SUCCESS = 'GET_PLAYLISTS_SUCCESS',
  GET_PLAYLISTS_ERROR = 'GET_PLAYLISTS_ERROR',
}

export interface GetPlaylistsAction extends Action {
  type: PlaylistsActionType.GET_PLAYLISTS;
}

export interface GetPlaylistsSuccessAction extends Action {
  type: PlaylistsActionType.GET_PLAYLISTS_SUCCESS;
  payload: {
    playlists: Playlist[];
  };
}

export interface GetPlaylistsErrorAction extends Action {
  type: PlaylistsActionType.GET_PLAYLISTS_ERROR;
  payload: {
    error: Error;
  };
}

export const getPlaylistsAction = (): GetPlaylistsAction => ({
  type: PlaylistsActionType.GET_PLAYLISTS,
});

export const getPlaylistsSuccessAction = ({
  playlists,
}: {
  playlists: Playlist[];
}): GetPlaylistsSuccessAction => ({
  type: PlaylistsActionType.GET_PLAYLISTS_SUCCESS,
  payload: { playlists },
});

export const getPlaylistsErrorAction = (
  error: Error,
): GetPlaylistsErrorAction => ({
  type: PlaylistsActionType.GET_PLAYLISTS_ERROR,
  payload: { error },
});
