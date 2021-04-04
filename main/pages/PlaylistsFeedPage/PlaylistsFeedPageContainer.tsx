import React from 'react';
import { connect } from 'react-redux';

import { GetPlaylistsRequest, Playlist } from '../../domain/Playlist';
import { AppState } from '../../store/AppState';
import { getPlaylistsThunk } from '../../store/playlists/getPlaylistsThunk';
import { PlaylistsFeedPage } from './PlaylistsFeedPage';

export interface PlaylistsFeedPageProps {
  playlists: Playlist[];
}

export interface PlaylistsFeedDispatchProps {
  getPlaylists(request: GetPlaylistsRequest): void;
}

const mapStateToProps = ({ playlists }: AppState): PlaylistsFeedPageProps => ({
  playlists,
});

const mapDispatch: PlaylistsFeedDispatchProps = {
  getPlaylists: getPlaylistsThunk,
};

export const PlaylistsFeedPageContainer = connect<
  PlaylistsFeedPageProps,
  PlaylistsFeedDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: PlaylistsFeedPageProps & PlaylistsFeedDispatchProps) => {
  return <PlaylistsFeedPage {...props} />;
});
