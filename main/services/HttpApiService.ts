import { ApiService } from '../domain/ApiService';
import { GetPlaylistsResponse } from '../domain/Playlist';
import { GetVideosResponse } from '../domain/Video';
import { AxiosService } from './AxiosService';

export class HttpApiService implements ApiService {
  private axiosInstance: AxiosService;

  constructor() {
    this.axiosInstance = new AxiosService({
      baseURL: `${BASE_URL}`,
    });
  }

  getVideos(): Promise<GetVideosResponse> {
    return this.axiosInstance.get<any, GetVideosResponse>('videos');
  }

  getPlaylists(): Promise<GetPlaylistsResponse> {
    return this.axiosInstance.get<any, GetPlaylistsResponse>('playlists');
  }
}
