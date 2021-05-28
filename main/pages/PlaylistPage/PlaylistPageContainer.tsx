import React from 'react';
import { connect } from 'react-redux';

import { Playlist } from '../../domain/Playlist';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { Tracking, TrackItemRequest } from '../../domain/Tracking';
import { User } from '../../domain/User';
import { Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getTrackedItemsThunk } from '../../store/tracking/getTrackedItemsThunk';
import { saveTrackedItemThunk } from '../../store/tracking/saveTrackedItemThunk';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { PlaylistPage } from './PlaylistPage';

export interface PlaylistPageProps {
  videos: Video[];
  playlist: Playlist;
  appUser: User;
  users: User[];
  trackings: Tracking[];
}

export interface PlaylistDispatchProps {
  getVideos(request: SearchVideosRequest): void;
  saveTrackedItem(request: TrackItemRequest): void;
  getTrackedItems(userId: string): void;
}

const mapStateToProps = ({
  videos,
  playlist,
  appUser,
  users,
  trackings,
}: AppState): PlaylistPageProps => ({
  videos,
  playlist,
  appUser,
  users,
  trackings,
});

const mapDispatch: PlaylistDispatchProps = {
  getVideos: getVideosThunk,
  saveTrackedItem: saveTrackedItemThunk,
  getTrackedItems: getTrackedItemsThunk,
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
