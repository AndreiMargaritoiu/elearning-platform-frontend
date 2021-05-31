export interface Inquiry {
  id: string;
  mentorId: string;
  inquirerEmail: string;
  read: boolean;
  createdAt: number;
}

export interface SendInquiryRequest {
  mentorId: string;
}
