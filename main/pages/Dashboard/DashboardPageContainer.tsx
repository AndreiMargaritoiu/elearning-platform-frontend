import React from 'react';
import { connect } from 'react-redux';

import { GetPlaylistsResponse } from '../../domain/Playlist';
import { GetVideosResponse } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getPlaylistsThunk } from '../../store/playlists/getPlaylistsThunk';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { DashboardPage } from './DashboardPage';

export interface DashboardPageProps {
  playlists: GetPlaylistsResponse;
  videos: GetVideosResponse;
}

export interface DashboardDispatchProps {
  getPlaylists(): void;
  getVideos(): void;
}

const mapStateToProps = ({
  playlists,
  videos,
}: AppState): DashboardPageProps => ({
  playlists,
  videos,
});

const mapDispatch: DashboardDispatchProps = {
  getPlaylists: getPlaylistsThunk,
  getVideos: getVideosThunk,
};

export const DashboardPageContainer = connect<
  DashboardPageProps,
  DashboardDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: DashboardPageProps & DashboardDispatchProps) => {
  return <DashboardPage {...props} />;
});
