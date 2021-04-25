export interface Workshop {
  id: string;
  description: string;
  tag: string;
  location: string;
  thumbnailUrl: string;
  date: number;
  onlineEvent: boolean;
  participants: string[];
}

export interface AddWorkshopRequest {
  description: string;
  tag: string;
  location: string;
  thumbnailUrl: string;
  date: number;
  onlineEvent: boolean;
}
