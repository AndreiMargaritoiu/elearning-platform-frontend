import { Mentorship } from '../domain/Mentorship';
import { Playlist } from '../domain/Playlist';
import { User } from '../domain/User';
import { Video } from '../domain/Video';

export interface AppState {
  appUser: User;
  users: User[];
  video: Video;
  videos: Video[];
  playlists: Playlist[];
  mentorships: Mentorship[];
}
