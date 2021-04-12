import React from 'react';
import { connect } from 'react-redux';
import { GetMentorshipsRequest, Mentorship } from '../../domain/Mentorship';

import { GetPlaylistsRequest, Playlist } from '../../domain/Playlist';
import { User } from '../../domain/User';
import { GetVideosRequest, Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getMentorshipsThunk } from '../../store/mentoring/getMentorshipsThunk';
import { getPlaylistsThunk } from '../../store/playlists/getPlaylistsThunk';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { OthersProfilePage } from './OthersProfilePage';

export interface OthersProfilePageProps {
  appUser: User;
  user: User;
  playlists: Playlist[];
  videos: Video[];
  mentorships: Mentorship[];
}

export interface OthersProfileDispatchProps {
  getPlaylists(request: GetPlaylistsRequest): void;
  getVideos(request: GetVideosRequest): void;
  getMentorships(request: GetMentorshipsRequest): void;
}

const mapStateToProps = ({
  appUser,
  user,
  playlists,
  videos,
  mentorships,
}: AppState): OthersProfilePageProps => ({
  appUser,
  user,
  playlists,
  videos,
  mentorships,
});

const mapDispatch: OthersProfileDispatchProps = {
  getPlaylists: getPlaylistsThunk,
  getVideos: getVideosThunk,
  getMentorships: getMentorshipsThunk,
};

export const OthersProfilePageContainer = connect<
  OthersProfilePageProps,
  OthersProfileDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: OthersProfilePageProps & OthersProfileDispatchProps) => {
  return <OthersProfilePage {...props} />;
});
