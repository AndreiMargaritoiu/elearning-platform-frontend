import { ApiService } from '../domain/ApiService';
import { Inquiry, SendInquiryRequest } from '../domain/Inquiry';
import {
  AddMentorshipRequest,
  Mentorship,
  UpdateMentorshipRequest,
} from '../domain/Mentorship';
import { Playlist, UpdatePlaylistRequest } from '../domain/Playlist';
import { SearchMentorshipsRequest } from '../domain/SearchMentorshipsRequest';
import { SearchPlaylistsRequest } from '../domain/SearchPlaylistsRequest';
import { SearchVideosRequest } from '../domain/SearchVideosRequest';
import { TrackItemRequest } from '../domain/Tracking';
import { User } from '../domain/User';
import { UpdateVideoRequest, Video } from '../domain/Video';
import { AddWorkshopRequest, Workshop } from '../domain/Workshop';
import { AxiosService } from './AxiosService';

export class HttpApiService implements ApiService {
  private axiosInstance: AxiosService;

  constructor() {
    this.axiosInstance = new AxiosService({
      baseURL: `${BASE_URL}`,
    });
  }

  // Videos
  getVideos(request: SearchVideosRequest): Promise<Video[]> {
    return this.axiosInstance.get<SearchVideosRequest, Video[]>(
      'videos',
      request,
    );
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
  getPlaylists(request: SearchPlaylistsRequest): Promise<Playlist[]> {
    return this.axiosInstance.get<SearchPlaylistsRequest, Playlist[]>(
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
  getMentorships(request: SearchMentorshipsRequest): Promise<Mentorship[]> {
    const queryString = SearchMentorshipsRequest.queryString(request);
    return this.axiosInstance.get<any, Mentorship[]>(
      `mentoring?${queryString}`,
    );
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

  // Inquiries
  getMyInquiries(userId: string): Promise<Inquiry[]> {
    return this.axiosInstance.get<string, Inquiry[]>(`inquiries/${userId}`);
  }

  sendInquiry(request: SendInquiryRequest): Promise<Inquiry> {
    return this.axiosInstance.post<SendInquiryRequest, Inquiry>(
      'inquiries',
      request,
    );
  }

  // Workshops
  getAllWorkshops(): Promise<Workshop[]> {
    return this.axiosInstance.get<void, Workshop[]>('workshops');
  }

  addWorkshop(request: AddWorkshopRequest): Promise<Workshop> {
    return this.axiosInstance.post<AddWorkshopRequest, Workshop>(
      'workshops',
      request,
    );
  }
}
