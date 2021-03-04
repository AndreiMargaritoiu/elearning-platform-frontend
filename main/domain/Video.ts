export interface Video {
  videoUrl: string;
  userId: string;
  thumbnailUrl: string;
}

export interface GetVideosResponse {
  videos?: Video[];
}
