import React from 'react';
import { connect } from 'react-redux';
import { Playlist } from '../../domain/Playlist';

import { GetVideosRequest, Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { PlaylistPage } from './PlaylistPage';

export interface PlaylistPageProps {
  videos: Video[];
  playlist: Playlist;
}

export interface PlaylistDispatchProps {
  getVideos(request: GetVideosRequest): void;
}

const mapStateToProps = ({
  videos,
  playlist,
}: AppState): PlaylistPageProps => ({
  videos,
  playlist,
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
