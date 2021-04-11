export interface Mentorship {
  description: string;
  price: number;
  id: string;
  mentordId: string;
  mentorEmail: string;
  createdAt: number;
}

export interface GetMentorshipsRequest {
  uid?: string;
}

export interface AddMentorshipRequest {
  description: string;
  price: number;
  mentordId: string;
  mentorEmail: string;
}

export interface UpdateMentorshipRequest {
  description: string;
  price: number;
}
