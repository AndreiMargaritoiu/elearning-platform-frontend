import React from 'react';
import { connect } from 'react-redux';

import { Playlist } from '../../domain/Playlist';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { Tracking, TrackItemRequest } from '../../domain/Tracking';
import { User } from '../../domain/User';
import { Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getPlaylistThunk } from '../../store/playlist/getPlaylistThunk';
import { getTrackedItemsThunk } from '../../store/tracking/getTrackedItemsThunk';
import { saveTrackedItemThunk } from '../../store/tracking/saveTrackedItemThunk';
import { getUserThunk } from '../../store/user/getUserThunk';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { PlaylistPage } from './PlaylistPage';

export interface PlaylistPageProps {
  videos: Video[];
  playlist: Playlist;
  appUser: User;
  user: User;
  trackings: Tracking[];
}

export interface PlaylistDispatchProps {
  getPlaylist(playlistId: string): any;
  getVideos(request: SearchVideosRequest): void;
  saveTrackedItem(request: TrackItemRequest): void;
  getTrackedItems(): void;
  getUser(userId: string): void;
}

const mapStateToProps = ({
  videos,
  playlist,
  appUser,
  user,
  trackings,
}: AppState): PlaylistPageProps => ({
  videos,
  playlist,
  appUser,
  user,
  trackings,
});

const mapDispatch: PlaylistDispatchProps = {
  getVideos: getVideosThunk,
  saveTrackedItem: saveTrackedItemThunk,
  getTrackedItems: getTrackedItemsThunk,
  getUser: getUserThunk,
  getPlaylist: getPlaylistThunk,
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
