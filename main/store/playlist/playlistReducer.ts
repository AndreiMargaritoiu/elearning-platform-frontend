import { Playlist } from '../../domain/Playlist';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  GetPlaylistSuccessAction,
  PlaylistActionType,
} from './playlistActions';

type ActionType = SetInitialStateAction | GetPlaylistSuccessAction;

export const initialState: Playlist = {
  uid: '',
  thumbnailUrl: '',
  description: '',
  id: '',
  title: '',
  category: '',
  createdAt: 0,
  searchIndex: [],
  videoRefs: [],
};

export const playlistReducer = (
  playlistState: Playlist = initialState,
  action: ActionType,
): Playlist => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case PlaylistActionType.GET_PLAYLIST_SUCCESS:
      return action.payload.playlist;
    default:
      return playlistState;
  }
};
