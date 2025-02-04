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

export interface AddPlaylistRequest {
  id: string;
  title: string;
  description: string;
  category: string;
  videoRefs: string[];
  searchIndex: string[];
  thumbnailUrl: string;
}

export interface UpdatePlaylistRequest {
  title?: string;
  description?: string;
  videoRefs?: string[];
  searchIndex?: string[];
}
