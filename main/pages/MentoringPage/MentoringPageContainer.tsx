import React from 'react';
import { connect } from 'react-redux';

import {
  AddMentorshipRequest,
  GetMentorshipsRequest,
  Mentorship,
  UpdateMentorshipRequest,
} from '../../domain/Mentorship';
import { User } from '../../domain/User';
import { AppState } from '../../store/AppState';
import { addMentorshipThunk } from '../../store/mentoring/addMentorshipThunk';
import { deleteMentorshipThunk } from '../../store/mentoring/deleteMentorshipThunk';
import { getMentorshipsThunk } from '../../store/mentoring/getMentorshipsThunk';
import { updateMentorshipThunk } from '../../store/mentoring/updateMentorshipThunk';
import { MentoringPage } from './MentoringPage';

export interface MentoringPageProps {
  mentorships: Mentorship[];
  appUser: User;
}

export interface MentoringDispatchProps {
  getMentorships(request: GetMentorshipsRequest): void;
  addMentorship(request: AddMentorshipRequest): void;
}

const mapStateToProps = ({
  mentorships,
  appUser,
}: AppState): MentoringPageProps => ({
  mentorships,
  appUser,
});

const mapDispatch: MentoringDispatchProps = {
  getMentorships: getMentorshipsThunk,
  addMentorship: addMentorshipThunk,
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
