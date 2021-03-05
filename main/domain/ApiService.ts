import { GetPlaylistsResponse } from './Playlist';
import { GetVideosResponse } from './Video';

export interface ApiService {
  getVideos(): Promise<GetVideosResponse>;
  getPlaylists(): Promise<GetPlaylistsResponse>;
}
