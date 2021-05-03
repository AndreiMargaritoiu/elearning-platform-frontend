import { Action } from 'redux';

import { Playlist } from '../../domain/Playlist';

export enum PlaylistsActionType {
  GET_PLAYLISTS = 'GET_PLAYLISTS',
  GET_PLAYLISTS_SUCCESS = 'GET_PLAYLISTS_SUCCESS',
  GET_PLAYLISTS_ERROR = 'GET_PLAYLISTS_ERROR',
  ADD_PLAYLIST = 'ADD_PLAYLIST',
  ADD_PLAYLIST_SUCCESS = 'ADD_PLAYLIST_SUCCESS',
  ADD_PLAYLIST_ERROR = 'ADD_PLAYLIST_ERROR',
  UPDATE_PLAYLIST = 'UPDATE_PLAYLIST',
  UPDATE_PLAYLIST_SUCCESS = 'UPDATE_PLAYLIST_SUCCESS',
  UPDATE_PLAYLIST_ERROR = 'UPDATE_PLAYLIST_ERROR',
  DELETE_PLAYLIST = 'DELETE_PLAYLIST',
  DELETE_PLAYLIST_SUCCESS = 'DELETE_PLAYLIST_SUCCESS',
  DELETE_PLAYLIST_ERROR = 'DELETE_PLAYLIST_ERROR',
}

// Get
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

export const getPlaylistsSuccessAction = (
  playlists: Playlist[],
): GetPlaylistsSuccessAction => ({
  type: PlaylistsActionType.GET_PLAYLISTS_SUCCESS,
  payload: { playlists },
});

export const getPlaylistsErrorAction = (
  error: Error,
): GetPlaylistsErrorAction => ({
  type: PlaylistsActionType.GET_PLAYLISTS_ERROR,
  payload: { error },
});

// Add
export interface AddPlaylistAction extends Action {
  type: PlaylistsActionType.ADD_PLAYLIST;
}

export interface AddPlaylistSuccessAction extends Action {
  type: PlaylistsActionType.ADD_PLAYLIST_SUCCESS;
  payload: {
    playlist: Playlist;
  };
}

export interface AddPlaylistErrorAction extends Action {
  type: PlaylistsActionType.ADD_PLAYLIST_ERROR;
  payload: {
    error: Error;
  };
}

export const addPlaylistAction = (): AddPlaylistAction => ({
  type: PlaylistsActionType.ADD_PLAYLIST,
});

export const addPlaylistSuccessAction = (
  playlist: Playlist,
): AddPlaylistSuccessAction => ({
  type: PlaylistsActionType.ADD_PLAYLIST_SUCCESS,
  payload: { playlist },
});

export const addPlaylistErrorAction = (
  error: Error,
): AddPlaylistErrorAction => ({
  type: PlaylistsActionType.ADD_PLAYLIST_ERROR,
  payload: { error },
});

// Update
export interface UpdatePlaylistAction extends Action {
  type: PlaylistsActionType.UPDATE_PLAYLIST;
}

export interface UpdatePlaylistSuccessAction extends Action {
  type: PlaylistsActionType.UPDATE_PLAYLIST_SUCCESS;
  payload: {
    playlist: Playlist;
  };
}

export interface UpdatePlaylistErrorAction extends Action {
  type: PlaylistsActionType.UPDATE_PLAYLIST_ERROR;
  payload: {
    error: Error;
  };
}

export const updatePlaylistAction = (): UpdatePlaylistAction => ({
  type: PlaylistsActionType.UPDATE_PLAYLIST,
});

export const updatePlaylistSuccessAction = (
  playlist: Playlist,
): UpdatePlaylistSuccessAction => ({
  type: PlaylistsActionType.UPDATE_PLAYLIST_SUCCESS,
  payload: { playlist },
});

export const updatePlaylistErrorAction = (
  error: Error,
): UpdatePlaylistErrorAction => ({
  type: PlaylistsActionType.UPDATE_PLAYLIST_ERROR,
  payload: { error },
});

// Delete
export interface DeletePlaylistAction extends Action {
  type: PlaylistsActionType.DELETE_PLAYLIST;
}

export interface DeletePlaylistSuccessAction extends Action {
  type: PlaylistsActionType.DELETE_PLAYLIST_SUCCESS;
  payload: {
    playlistId: string;
  };
}

export interface DeletePlaylistErrorAction extends Action {
  type: PlaylistsActionType.DELETE_PLAYLIST_ERROR;
  payload: {
    error: Error;
  };
}

export const deletePlaylistAction = (): DeletePlaylistAction => ({
  type: PlaylistsActionType.DELETE_PLAYLIST,
});

export const deletePlaylistSuccessAction = (
  playlistId: string,
): DeletePlaylistSuccessAction => ({
  type: PlaylistsActionType.DELETE_PLAYLIST_SUCCESS,
  payload: { playlistId },
});

export const deletePlaylistErrorAction = (
  error: Error,
): DeletePlaylistErrorAction => ({
  type: PlaylistsActionType.DELETE_PLAYLIST_ERROR,
  payload: { error },
});
