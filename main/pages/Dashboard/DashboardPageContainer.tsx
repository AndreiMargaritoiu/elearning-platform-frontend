import React from 'react';
import { connect } from 'react-redux';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { User } from '../../domain/User';

import { Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { DashboardPage } from './DashboardPage';

export interface DashboardPageProps {
  videos: Video[];
  users: User[];
}

export interface DashboardDispatchProps {
  getVideos(request: SearchVideosRequest): void;
}

const mapStateToProps = ({ videos, users }: AppState): DashboardPageProps => ({
  videos,
  users,
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
