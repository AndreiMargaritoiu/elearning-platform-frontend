import React from 'react';
import { connect } from 'react-redux';

import { GetVideosRequest, Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { PlaylistPage } from './PlaylistPage';

export interface PlaylistPageProps {
  videos: Video[];
}

export interface PlaylistDispatchProps {
  getVideos(request: GetVideosRequest): void;
}

const mapStateToProps = ({ videos }: AppState): PlaylistPageProps => ({
  videos,
});

const mapDispatch: PlaylistDispatchProps = {
  getVideos: getVideosThunk,
};

export const PlaylistPageContainer = connect<
  PlaylistPageProps,
  PlaylistDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: PlaylistPageProps & PlaylistDispatchProps) => {
  return <PlaylistPage {...props} />;
});
