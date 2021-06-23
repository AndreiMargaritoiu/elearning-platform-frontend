import React from 'react';
import { connect } from 'react-redux';
import { SendInquiryRequest } from '../../domain/Inquiry';

import { Mentorship } from '../../domain/Mentorship';
import { SearchMentorshipsRequest } from '../../domain/SearchMentorshipsRequest';
import { SearchUsersRequest } from '../../domain/SearchUsersRequest';
import { User } from '../../domain/User';
import { AppState } from '../../store/AppState';
import { getMentorshipsThunk } from '../../store/mentoring/getMentorshipsThunk';
import { getUsersThunk } from '../../store/users/getUsersThunks';
import { MentoringPage } from './MentoringPage';

export interface MentoringPageProps {
  mentorships: Mentorship[];
  appUser: User;
  users: User[];
}

export interface MentoringDispatchProps {
  getMentorships(request: SearchMentorshipsRequest): void;
  getUsers(request: SearchUsersRequest): void;
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
  getUsers: getUsersThunk,
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
