import React, { FC, useEffect } from 'react';

import { Mentorship } from '../../domain/Mentorship';
import {
  MentoringDispatchProps,
  MentoringPageProps,
} from './MentoringPageContainer';
import { StyledMentoringPage } from './MentoringPageStyles';

const MentoringPage: FC<MentoringPageProps & MentoringDispatchProps> = (
  props,
) => {
  const {
    mentorships,
    getMentorships,
    addMentorship,
    updateMentorship,
    deleteMentorship,
  } = props;

  //   useEffect(() => {
  //     const getPlaylistsRequest: GetPlaylistsRequest = {};
  //     getPlaylists(getPlaylistsRequest);
  //     const getVideosRequest: GetPlaylistsRequest = {};
  //     getVideos(getVideosRequest);
  //   });

  console.log(mentorships);

  return (
    <StyledMentoringPage>
      {mentorships.map((mentorship: Mentorship) => (
        <label>{mentorship.description}</label>
      ))}
    </StyledMentoringPage>
  );
};

export { MentoringPage };
