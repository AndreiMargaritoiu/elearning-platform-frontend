import { Inquiry, SendInquiryRequest } from './Inquiry';
import {
  AddMentorshipRequest,
  GetMentorshipsRequest,
  Mentorship,
  UpdateMentorshipRequest,
} from './Mentorship';
import {
  GetPlaylistsRequest,
  Playlist,
  UpdatePlaylistRequest,
} from './Playlist';
import { TrackItemRequest } from './Tracking';
import { User } from './User';
import { GetVideosRequest, UpdateVideoRequest, Video } from './Video';

export interface ApiService {
  getVideos(request: GetVideosRequest): Promise<Video[]>;
  getVideo(videoId: string): Promise<Video>;
  updateVideo(videoId: string, request: UpdateVideoRequest): Promise<Video>;
  deleteVideo(videoId: string): Promise<void>;

  getPlaylists(request: GetPlaylistsRequest): Promise<Playlist[]>;
  getPlaylist(playlistId: string): Promise<Playlist>;
  updatePlaylist(
    playlistId: string,
    request: UpdatePlaylistRequest,
  ): Promise<Playlist>;
  deletePlaylist(playlistId: string): Promise<void>;

  getMentorships(request: GetMentorshipsRequest): Promise<Mentorship[]>;
  addMentorship(request: AddMentorshipRequest): Promise<Mentorship>;
  updateMentorship(
    mentroshipId: string,
    request: UpdateMentorshipRequest,
  ): Promise<Mentorship>;
  deleteMentorship(mentroshipId: string): Promise<void>;

  getUsers(): Promise<User[]>;
  getUser(userId: string): Promise<User>;

  saveTrackedItem(request: TrackItemRequest): Promise<void>;

  sendInquiry(request: SendInquiryRequest): Promise<Inquiry>;
  getMyInquiries(userId: string): Promise<Inquiry[]>;
}
