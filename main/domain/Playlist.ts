export interface Playlist {
  name: string;
  userId: string;
  videos: string[];
}

export interface GetPlaylistsResponse {
  playlists?: Playlist[];
}
