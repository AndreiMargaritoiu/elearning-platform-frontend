import { Playlist } from '../../domain/Playlist';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  AddPlaylistSuccessAction,
  DeletePlaylistSuccessAction,
  GetPlaylistsSuccessAction,
  PlaylistsActionType,
  UpdatePlaylistSuccessAction,
} from './playlistsActions';

type ActionType =
  | SetInitialStateAction
  | GetPlaylistsSuccessAction
  | AddPlaylistSuccessAction
  | UpdatePlaylistSuccessAction
  | DeletePlaylistSuccessAction;

export const initialState: Playlist[] = [];

export const playlistsReducer = (
  playlistsState: Playlist[] = initialState,
  action: ActionType,
): Playlist[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case PlaylistsActionType.GET_PLAYLISTS_SUCCESS:
      return action.payload.playlists;
    case PlaylistsActionType.ADD_PLAYLIST_SUCCESS:
      return {
        ...playlistsState,
        ...action.payload.playlist,
      };
    case PlaylistsActionType.UPDATE_PLAYLIST_SUCCESS:
      return playlistsState.map((playlist: Playlist) =>
        playlist.id === action.payload.playlist.id
          ? {
              ...playlist,
              description: action.payload.playlist.description,
              title: action.payload.playlist.title,
              videoRefs: action.payload.playlist.videoRefs,
              searchIndex: action.payload.playlist.searchIndex,
            }
          : playlist,
      );
    case PlaylistsActionType.DELETE_PLAYLIST_SUCCESS:
      return playlistsState.filter(
        (playlist: Playlist) => playlist.id !== action.payload.playlistId,
      );
    default:
      return playlistsState;
  }
};
