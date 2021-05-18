import { Inquiry } from '../domain/Inquiry';
import { Mentorship } from '../domain/Mentorship';
import { Playlist } from '../domain/Playlist';
import { Tracking } from '../domain/Tracking';
import { User } from '../domain/User';
import { Video } from '../domain/Video';
import { Workshop } from '../domain/Workshop';

export interface AppState {
  appUser: User;
  user: User;
  users: User[];
  video: Video;
  videos: Video[];
  playlist: Playlist;
  playlists: Playlist[];
  mentorships: Mentorship[];
  inquiries: Inquiry[];
  workshops: Workshop[];
  trackings: Tracking[];
}
