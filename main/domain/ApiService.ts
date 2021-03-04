import { GetPlaylistsResponse } from './Playlist';
import { GetVideosResponse } from './Video';

export interface ApiService {
  getAllVideos(): Promise<GetVideosResponse>;
  getAllPlaylists(): Promise<GetPlaylistsResponse>;
}
