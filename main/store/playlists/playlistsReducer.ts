import { GetPlaylistsResponse } from '../../domain/Playlist';
import {
  InitialStateActionType,
  SetInitialStateAction,
} from '../setInitialStateAction';
import {
  GetPlaylistsSuccessAction,
  PlaylistsActionType,
} from './playlistsActions';

type ActionType = SetInitialStateAction | GetPlaylistsSuccessAction;

export const initialState: GetPlaylistsResponse = {
  playlists: [],
};

export const playlistsReducer = (
  store = initialState,
  action: ActionType,
): GetPlaylistsResponse => {
  switch (action.type) {
    case InitialStateActionType.SET_INITIAL_STATE:
      return initialState;
    case PlaylistsActionType.GET_PLAYLISTS_SUCCESS:
      return {
        ...store,
        ...action.payload,
      };
    default:
      return store;
  }
};
