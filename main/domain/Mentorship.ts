export interface Mentorship {
  description: string;
  price: number;
  id: string;
  mentorId: string;
  createdAt: number;
  category: string;
}

export interface AddMentorshipRequest {
  description: string;
  price: number;
  category: string;
}

export interface UpdateMentorshipRequest {
  description: string;
  price: number;
}
