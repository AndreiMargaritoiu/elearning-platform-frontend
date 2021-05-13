import React from 'react';
import { connect } from 'react-redux';

import { Playlist } from '../../domain/Playlist';
import { SearchPlaylistsRequest } from '../../domain/SearchPlaylistsRequest';
import { User } from '../../domain/User';
import { AppState } from '../../store/AppState';
import { getPlaylistsThunk } from '../../store/playlists/getPlaylistsThunk';
import { PlaylistsFeedPage } from './PlaylistsFeedPage';

export interface PlaylistsFeedPageProps {
  playlists: Playlist[];
  users: User[];
}

export interface PlaylistsFeedDispatchProps {
  getPlaylists(request: SearchPlaylistsRequest): void;
}

const mapStateToProps = ({
  playlists,
  users,
}: AppState): PlaylistsFeedPageProps => ({
  playlists,
  users,
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
