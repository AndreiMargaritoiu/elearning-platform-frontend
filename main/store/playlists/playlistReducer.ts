import { Playlist } from '../../domain/Playlist';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  DeletePlaylistSuccessAction,
  GetPlaylistsSuccessAction,
  PlaylistActionType,
  UpdatePlaylistSuccessAction,
} from './playlistActions';

type ActionType =
  | SetInitialStateAction
  | GetPlaylistsSuccessAction
  | UpdatePlaylistSuccessAction
  | DeletePlaylistSuccessAction;

export const initialState: Playlist[] = [];

export const playlistsReducer = (
  mentoringState: Playlist[] = initialState,
  action: ActionType,
): Playlist[] => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case PlaylistActionType.GET_PLAYLISTS_SUCCESS:
      return action.payload.playlists;
    case PlaylistActionType.UPDATE_PLAYLIST_SUCCESS:
      return mentoringState.map((playlist: Playlist) =>
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
    case PlaylistActionType.DELETE_PLAYLIST_SUCCESS:
      return mentoringState.filter(
        (playlist: Playlist) => playlist.id !== action.payload.playlistId,
      );
    default:
      return mentoringState;
  }
};
