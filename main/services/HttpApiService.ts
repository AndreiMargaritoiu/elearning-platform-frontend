import { ApiService } from '../domain/ApiService';
import {
  AddMentorshipRequest,
  GetMentorshipsRequest,
  Mentorship,
  UpdateMentorshipRequest,
} from '../domain/Mentorship';
import {
  GetPlaylistsRequest,
  Playlist,
  UpdatePlaylistRequest,
} from '../domain/Playlist';
import { TrackItemRequest } from '../domain/Tracking';
import { User } from '../domain/User';
import { GetVideosRequest, UpdateVideoRequest, Video } from '../domain/Video';
import { AxiosService } from './AxiosService';

export class HttpApiService implements ApiService {
  private axiosInstance: AxiosService;

  constructor() {
    this.axiosInstance = new AxiosService({
      baseURL: `${BASE_URL}`,
    });
  }

  // Videos
  getVideos(request: GetVideosRequest): Promise<Video[]> {
    return this.axiosInstance.get<GetVideosRequest, Video[]>('videos', request);
  }

  getVideo(videoId: string): Promise<Video> {
    return this.axiosInstance.get<string, Video>(`videos/${videoId}`);
  }

  updateVideo(videoId: string, request: UpdateVideoRequest): Promise<Video> {
    return this.axiosInstance.patch<UpdateVideoRequest, Video>(
      `videos/${videoId}`,
      request,
    );
  }

  deleteVideo(videoId: string): Promise<void> {
    return this.axiosInstance.delete<string, void>(`videos/${videoId}`);
  }

  // Playlists
  getPlaylists(request: GetPlaylistsRequest): Promise<Playlist[]> {
    return this.axiosInstance.get<GetPlaylistsRequest, Playlist[]>(
      'playlists',
      request,
    );
  }

  getPlaylist(playlistId: string): Promise<Playlist> {
    return this.axiosInstance.get<string, Playlist>(`playlists/${playlistId}`);
  }

  updatePlaylist(
    playlistId: string,
    request: UpdatePlaylistRequest,
  ): Promise<Playlist> {
    return this.axiosInstance.patch<UpdatePlaylistRequest, Playlist>(
      `playlists/${playlistId}`,
      request,
    );
  }

  deletePlaylist(playlistId: string): Promise<void> {
    return this.axiosInstance.delete<string, void>(`playlists/${playlistId}`);
  }

  // Mentoring
  getMentorships(request: GetMentorshipsRequest): Promise<Mentorship[]> {
    return this.axiosInstance.get<any, Mentorship[]>('mentoring', request);
  }

  addMentorship(request: AddMentorshipRequest): Promise<Mentorship> {
    return this.axiosInstance.post<AddMentorshipRequest, Mentorship>(
      `mentoring`,
      request,
    );
  }

  updateMentorship(
    mentroshipId: string,
    request: UpdateMentorshipRequest,
  ): Promise<Mentorship> {
    return this.axiosInstance.patch<UpdateMentorshipRequest, Mentorship>(
      `mentoring/${mentroshipId}`,
      request,
    );
  }

  deleteMentorship(mentroshipId: string): Promise<void> {
    return this.axiosInstance.delete<string, void>(`mentoring/${mentroshipId}`);
  }

  // Users
  getUsers(): Promise<User[]> {
    return this.axiosInstance.get<any, User[]>('users');
  }

  getUser(userId: string): Promise<User> {
    return this.axiosInstance.get<string, User>(`users/${userId}`);
  }

  // Activity
  saveTrackedItem(request: TrackItemRequest): Promise<void> {
    return this.axiosInstance.post<TrackItemRequest, void>('tracking', request);
  }
}
