import React from 'react';
import { connect } from 'react-redux';

import { GetVideosRequest, Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { DashboardPage } from './DashboardPage';

export interface DashboardPageProps {
  videos: Video[];
}

export interface DashboardDispatchProps {
  getVideos(request: GetVideosRequest): void;
}

const mapStateToProps = ({ videos }: AppState): DashboardPageProps => ({
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
