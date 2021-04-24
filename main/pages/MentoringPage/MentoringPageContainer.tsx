import React from 'react';
import { connect } from 'react-redux';
import { SendInquiryRequest } from '../../domain/Inquiry';

import { GetMentorshipsRequest, Mentorship } from '../../domain/Mentorship';
import { User } from '../../domain/User';
import { AppState } from '../../store/AppState';
import { sendInquiryThunk } from '../../store/inquiries/SendInquiryThunk';
import { getMentorshipsThunk } from '../../store/mentoring/getMentorshipsThunk';
import { MentoringPage } from './MentoringPage';

export interface MentoringPageProps {
  mentorships: Mentorship[];
  appUser: User;
  users: User[];
}

export interface MentoringDispatchProps {
  getMentorships(request: GetMentorshipsRequest): void;
  sendInquiry(request: SendInquiryRequest): void;
}

const mapStateToProps = ({
  mentorships,
  appUser,
  users,
}: AppState): MentoringPageProps => ({
  mentorships,
  appUser,
  users,
});

const mapDispatch: MentoringDispatchProps = {
  getMentorships: getMentorshipsThunk,
  sendInquiry: sendInquiryThunk,
};

export const MentoringPageContainer = connect<
  MentoringPageProps,
  MentoringDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: MentoringPageProps & MentoringDispatchProps) => {
  return <MentoringPage {...props} />;
});
