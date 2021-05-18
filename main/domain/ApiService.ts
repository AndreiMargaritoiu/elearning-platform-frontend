import { Inquiry, SendInquiryRequest } from './Inquiry';
import {
  AddMentorshipRequest,
  Mentorship,
  UpdateMentorshipRequest,
} from './Mentorship';
import {
  AddPlaylistRequest,
  Playlist,
  UpdatePlaylistRequest,
} from './Playlist';
import { SearchMentorshipsRequest } from './SearchMentorshipsRequest';
import { SearchPlaylistsRequest } from './SearchPlaylistsRequest';
import { SearchVideosRequest } from './SearchVideosRequest';
import { Tracking, TrackItemRequest } from './Tracking';
import { User } from './User';
import { AddVideoRequest, UpdateVideoRequest, Video } from './Video';
import { AddWorkshopRequest, Workshop } from './Workshop';

export interface ApiService {
  getVideos(request: SearchVideosRequest): Promise<Video[]>;
  getVideo(videoId: string): Promise<Video>;
  addVideo(request: AddVideoRequest): Promise<Video>;
  updateVideo(videoId: string, request: UpdateVideoRequest): Promise<Video>;
  deleteVideo(videoId: string): Promise<void>;

  getPlaylists(request: SearchPlaylistsRequest): Promise<Playlist[]>;
  getPlaylist(playlistId: string): Promise<Playlist>;
  addPlaylist(request: AddPlaylistRequest): Promise<Playlist>;
  updatePlaylist(
    playlistId: string,
    request: UpdatePlaylistRequest,
  ): Promise<Playlist>;
  deletePlaylist(playlistId: string): Promise<void>;

  getMentorships(request: SearchMentorshipsRequest): Promise<Mentorship[]>;
  addMentorship(request: AddMentorshipRequest): Promise<Mentorship>;
  updateMentorship(
    mentroshipId: string,
    request: UpdateMentorshipRequest,
  ): Promise<Mentorship>;
  deleteMentorship(mentroshipId: string): Promise<void>;

  getUsers(): Promise<User[]>;
  getUser(userId: string): Promise<User>;

  saveTrackedItem(request: TrackItemRequest): Promise<Tracking>;
  getTrackedItems(userId: string): Promise<Tracking[]>;

  sendInquiry(request: SendInquiryRequest): Promise<Inquiry>;
  getMyInquiries(userId: string): Promise<Inquiry[]>;
  readInquiries(inquiries: string[]): Promise<void>;

  getAllWorkshops(): Promise<Workshop[]>;
  addWorkshop(request: AddWorkshopRequest): Promise<Workshop>;
}
