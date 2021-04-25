export interface Video {
  videoUrl: string;
  uid: string;
  thumbnailUrl: string;
  description: string;
  id: string;
  title: string;
  createdAt: number;
  searchIndex: string[];
}

export interface UpdateVideoRequest {
  title?: string;
  description?: string;
  serachIndex?: string[];
}
