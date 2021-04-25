export interface Playlist {
  id: string;
  title: string;
  description: string;
  uid: string;
  category: string;
  videoRefs: string[];
  searchIndex: string[];
  createdAt: number;
  thumbnailUrl: string;
}

export interface UpdatePlaylistRequest {
  title?: string;
  description?: string;
  videoRefs?: string[];
  serachIndex?: string[];
}
