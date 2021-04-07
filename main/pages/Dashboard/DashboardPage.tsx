import React, { FC, useEffect } from 'react';

import { Video } from '../../domain/Video';
import {
  DashboardDispatchProps,
  DashboardPageProps,
} from './DashboardPageContainer';
import { StyledDashboard } from './DashboardPageStyles';

const DashboardPage: FC<DashboardPageProps & DashboardDispatchProps> = (
  props,
) => {
  const { appUser, videos, getVideos } = props;

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

  console.log(videos);

  return (
    <StyledDashboard>
      <label>Hello ${appUser.username}</label>
      {videos.map((video: Video) => (
        <label>{video.title}</label>
      ))}
    </StyledDashboard>
  );
};

export { DashboardPage };
