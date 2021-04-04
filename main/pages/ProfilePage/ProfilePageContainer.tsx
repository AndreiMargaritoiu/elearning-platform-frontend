import React from 'react';
import { connect } from 'react-redux';

import { GetPlaylistsRequest, Playlist } from '../../domain/Playlist';
import { GetVideosRequest, Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getPlaylistsThunk } from '../../store/playlists/getPlaylistsThunk';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { ProfilePage } from './ProfilePage';

export interface ProfilePageProps {
  playlists: Playlist[];
  videos: Video[];
}

export interface ProfileDispatchProps {
  getPlaylists(request: GetPlaylistsRequest): void;
  getVideos(request: GetVideosRequest): void;
}

const mapStateToProps = ({
  playlists,
  videos,
}: AppState): ProfilePageProps => ({
  playlists,
  videos,
});

const mapDispatch: ProfileDispatchProps = {
  getPlaylists: getPlaylistsThunk,
  getVideos: getVideosThunk,
};

export const ProfilePageContainer = connect<
  ProfilePageProps,
  ProfileDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: ProfilePageProps & ProfileDispatchProps) => {
  return <ProfilePage {...props} />;
});
