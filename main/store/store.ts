import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { AppState } from './AppState';
import { mentorshipsReducer } from './mentoring/mentorshipReducer';
import { playlistsReducer } from './playlists/playlistsReducer';
import { appUserReducer } from './appUser/appUserReducer';
import { videosReducer } from './videos/videosReducer';
import { userReducer } from './users/userReducer';
import { videoReducer } from './video/videoReducer';

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  appUser: appUserReducer,
  users: userReducer,
  video: videoReducer,
  videos: videosReducer,
  playlists: playlistsReducer,
  mentorships: mentorshipsReducer,
});

export const initializeStore = (initialState?: AppState) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
