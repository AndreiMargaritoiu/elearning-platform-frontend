export interface Mentorship {
  description: string;
  price: number;
  id: string;
  mentorId: string;
  mentorEmail: string;
  createdAt: number;
  category: string;
}

export enum FilterCategories {
  SCHOOL = 'School',
  FACULTY = 'Faculty',
  OTHER = 'Other',
}

export interface GetMentorshipsRequest {
  uid?: string;
  categories?: string[];
}

export interface AddMentorshipRequest {
  description: string;
  price: number;
  mentorId: string;
  mentorEmail: string;
}

export interface UpdateMentorshipRequest {
  description: string;
  price: number;
}
