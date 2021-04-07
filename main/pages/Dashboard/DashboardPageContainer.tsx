import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../domain/User';

import { GetVideosRequest, Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { DashboardPage } from './DashboardPage';

export interface DashboardPageProps {
  videos: Video[];
  appUser: User;
}

export interface DashboardDispatchProps {
  getVideos(request: GetVideosRequest): void;
}

const mapStateToProps = ({
  appUser,
  videos,
}: AppState): DashboardPageProps => ({
  appUser,
  videos,
});

const mapDispatch: DashboardDispatchProps = {
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
