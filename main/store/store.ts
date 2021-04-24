import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { AppState } from './AppState';
import { mentorshipsReducer } from './mentoring/mentorshipReducer';
import { playlistsReducer } from './playlists/playlistsReducer';
import { appUserReducer } from './appUser/appUserReducer';
import { videosReducer } from './videos/videosReducer';
import { usersReducer } from './users/usersReducer';
import { videoReducer } from './video/videoReducer';
import { playlistReducer } from './playlist/playlistReducer';
import { userReducer } from './user/userReducer';
import { inquiriesReducer } from './inquiries/inquiriesReducer';

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  appUser: appUserReducer,
  user: userReducer,
  users: usersReducer,
  video: videoReducer,
  videos: videosReducer,
  playlist: playlistReducer,
  playlists: playlistsReducer,
  mentorships: mentorshipsReducer,
  inquiries: inquiriesReducer,
});

export const initializeStore = (initialState?: AppState) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
