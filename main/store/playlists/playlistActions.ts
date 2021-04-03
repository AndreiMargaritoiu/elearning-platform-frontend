import { Action } from 'redux';

import { Playlist } from '../../domain/Playlist';

export enum PlaylistActionType {
  GET_PLAYLISTS = 'GET_PLAYLISTS',
  GET_PLAYLISTS_SUCCESS = 'GET_PLAYLISTS_SUCCESS',
  GET_PLAYLISTS_ERROR = 'GET_PLAYLISTS_ERROR',
  UPDATE_PLAYLIST = 'UPDATE_PLAYLIST',
  UPDATE_PLAYLIST_SUCCESS = 'UPDATE_PLAYLIST_SUCCESS',
  UPDATE_PLAYLIST_ERROR = 'UPDATE_PLAYLIST_ERROR',
  DELETE_PLAYLIST = 'DELETE_PLAYLIST',
  DELETE_PLAYLIST_SUCCESS = 'DELETE_PLAYLIST_SUCCESS',
  DELETE_PLAYLIST_ERROR = 'DELETE_PLAYLIST_ERROR',
}

// Get
export interface GetPlaylistsAction extends Action {
  type: PlaylistActionType.GET_PLAYLISTS;
}

export interface GetPlaylistsSuccessAction extends Action {
  type: PlaylistActionType.GET_PLAYLISTS_SUCCESS;
  payload: {
    playlists: Playlist[];
  };
}

export interface GetPlaylistsErrorAction extends Action {
  type: PlaylistActionType.GET_PLAYLISTS_ERROR;
  payload: {
    error: Error;
  };
}

export const getPlaylistsAction = (): GetPlaylistsAction => ({
  type: PlaylistActionType.GET_PLAYLISTS,
});

export const getPlaylistsSuccessAction = (
  playlists: Playlist[],
): GetPlaylistsSuccessAction => ({
  type: PlaylistActionType.GET_PLAYLISTS_SUCCESS,
  payload: { playlists },
});

export const getPlaylistsErrorAction = (
  error: Error,
): GetPlaylistsErrorAction => ({
  type: PlaylistActionType.GET_PLAYLISTS_ERROR,
  payload: { error },
});

// Update
export interface UpdatePlaylistAction extends Action {
  type: PlaylistActionType.UPDATE_PLAYLIST;
}

export interface UpdatePlaylistSuccessAction extends Action {
  type: PlaylistActionType.UPDATE_PLAYLIST_SUCCESS;
  payload: {
    playlist: Playlist;
  };
}

export interface UpdatePlaylistErrorAction extends Action {
  type: PlaylistActionType.UPDATE_PLAYLIST_ERROR;
  payload: {
    error: Error;
  };
}

export const updatePlaylistAction = (): UpdatePlaylistAction => ({
  type: PlaylistActionType.UPDATE_PLAYLIST,
});

export const updatePlaylistSuccessAction = (
  playlist: Playlist,
): UpdatePlaylistSuccessAction => ({
  type: PlaylistActionType.UPDATE_PLAYLIST_SUCCESS,
  payload: { playlist },
});

export const updatePlaylistErrorAction = (
  error: Error,
): UpdatePlaylistErrorAction => ({
  type: PlaylistActionType.UPDATE_PLAYLIST_ERROR,
  payload: { error },
});

// Delete
export interface DeletePlaylistAction extends Action {
  type: PlaylistActionType.DELETE_PLAYLIST;
}

export interface DeletePlaylistSuccessAction extends Action {
  type: PlaylistActionType.DELETE_PLAYLIST_SUCCESS;
  payload: {
    playlistId: string;
  };
}

export interface DeletePlaylistErrorAction extends Action {
  type: PlaylistActionType.DELETE_PLAYLIST_ERROR;
  payload: {
    error: Error;
  };
}

export const deletePlaylistAction = (): DeletePlaylistAction => ({
  type: PlaylistActionType.DELETE_PLAYLIST,
});

export const deletePlaylistSuccessAction = (
  playlistId: string,
): DeletePlaylistSuccessAction => ({
  type: PlaylistActionType.DELETE_PLAYLIST_SUCCESS,
  payload: { playlistId },
});

export const deletePlaylistErrorAction = (
  error: Error,
): DeletePlaylistErrorAction => ({
  type: PlaylistActionType.DELETE_PLAYLIST_ERROR,
  payload: { error },
});
