import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { AppState } from './AppState';
import { playlistsReducer } from './playlists/playlistsReducer';
import { videosReducer } from './videos/videosReducer';

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  videos: videosReducer,
  playlists: playlistsReducer,
});

export const initializeStore = (initialState?: AppState) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
