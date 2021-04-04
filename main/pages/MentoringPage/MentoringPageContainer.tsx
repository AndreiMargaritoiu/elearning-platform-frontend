import React from 'react';
import { connect } from 'react-redux';

import {
  AddMentorshipRequest,
  Mentorship,
  UpdateMentorshipRequest,
} from '../../domain/Mentorship';
import { AppState } from '../../store/AppState';
import { addMentorshipThunk } from '../../store/mentoring/addMentorshipThunk';
import { deleteMentorshipThunk } from '../../store/mentoring/deleteMentorshipThunk';
import { getMentorshipsThunk } from '../../store/mentoring/getMentorshipsThunk';
import { updateMentorshipThunk } from '../../store/mentoring/updateMentorshipThunk';
import { MentoringPage } from './MentoringPage';

export interface MentoringPageProps {
  mentorships: Mentorship[];
}

export interface MentoringDispatchProps {
  getMentorships(): void;
  addMentorship(request: AddMentorshipRequest): void;
  updateMentorship(
    mentorshipId: string,
    request: UpdateMentorshipRequest,
  ): void;
  deleteMentorship(mentorshipId: string): void;
}

const mapStateToProps = ({ mentorships }: AppState): MentoringPageProps => ({
  mentorships,
});

const mapDispatch: MentoringDispatchProps = {
  getMentorships: getMentorshipsThunk,
  addMentorship: addMentorshipThunk,
  updateMentorship: updateMentorshipThunk,
  deleteMentorship: deleteMentorshipThunk,
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
