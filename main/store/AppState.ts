import { GetPlaylistsResponse } from '../domain/Playlist';
import { GetVideosResponse } from '../domain/Video';

export interface AppState {
  videos: GetVideosResponse;
  playlists: GetPlaylistsResponse;
}
