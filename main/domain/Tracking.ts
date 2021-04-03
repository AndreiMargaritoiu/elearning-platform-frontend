export interface Tracking {
  id: string;
  uid: string;
  vid: string;
  createdAt: number;
}

export interface TrackItemRequest {
  uid: string;
  vid: string;
}
