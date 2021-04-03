import React, { FC, useEffect } from 'react';
import {
  DashboardDispatchProps,
  DashboardPageProps,
} from './DashboardPageContainer';

import { StyledDashboard } from './DashboardPageStyles';

const DashboardPage: FC<DashboardPageProps & DashboardDispatchProps> = (
  props,
) => {
  const { playlists, videos, getPlaylists, getVideos } = props;

  useEffect(() => {
    getPlaylists();
    getVideos();
  });

  console.log(playlists);
  console.log(videos);

  return (
    <StyledDashboard>
      {playlists.playlists.map((playlist) => (
        <label>{playlist.name}</label>
      ))}
    </StyledDashboard>
  );
};

export { DashboardPage };
