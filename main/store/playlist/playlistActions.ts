import { Action } from 'redux';

import { Playlist } from '../../domain/Playlist';

export enum PlaylistActionType {
  GET_PLAYLIST = 'GET_PLAYLIST',
  GET_PLAYLIST_SUCCESS = 'GET_PLAYLIST_SUCCESS',
  GET_PLAYLIST_ERROR = 'GET_PLAYLISTS_ERROR',
}

// Get
export interface GetPlaylistAction extends Action {
  type: PlaylistActionType.GET_PLAYLIST;
}

export interface GetPlaylistSuccessAction extends Action {
  type: PlaylistActionType.GET_PLAYLIST_SUCCESS;
  payload: {
    playlist: Playlist;
  };
}

export interface GetPlaylistErrorAction extends Action {
  type: PlaylistActionType.GET_PLAYLIST_ERROR;
  payload: {
    error: Error;
  };
}

export const getPlaylistAction = (): GetPlaylistAction => ({
  type: PlaylistActionType.GET_PLAYLIST,
});

export const getPlaylistSuccessAction = (
  playlist: Playlist,
): GetPlaylistSuccessAction => ({
  type: PlaylistActionType.GET_PLAYLIST_SUCCESS,
  payload: { playlist },
});

export const getPlaylistErrorAction = (
  error: Error,
): GetPlaylistErrorAction => ({
  type: PlaylistActionType.GET_PLAYLIST_ERROR,
  payload: { error },
});
