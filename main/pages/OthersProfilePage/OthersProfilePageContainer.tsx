import React from 'react';
import { connect } from 'react-redux';

import { Mentorship } from '../../domain/Mentorship';
import { Playlist } from '../../domain/Playlist';
import { SearchMentorshipsRequest } from '../../domain/SearchMentorshipsRequest';
import { SearchPlaylistsRequest } from '../../domain/SearchPlaylistsRequest';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { UpdateUserRequest, User } from '../../domain/User';
import { Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { updateAppUserThunk } from '../../store/appUser/updateAppUserThunk';
import { getMentorshipsThunk } from '../../store/mentoring/getMentorshipsThunk';
import { getPlaylistsThunk } from '../../store/playlists/getPlaylistsThunk';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { OthersProfilePage } from './OthersProfilePage';
import { SearchUsersRequest } from '../../domain/SearchUsersRequest';
import { getUsersThunk } from '../../store/users/getUsersThunks';
import { getUserThunk } from '../../store/user/getUserThunk';

export interface OthersProfilePageProps {
  appUser: User;
  user: User;
  users: User[];
  playlists: Playlist[];
  videos: Video[];
  mentorships: Mentorship[];
}

export interface OthersProfileDispatchProps {
  getPlaylists(request: SearchPlaylistsRequest): void;
  getVideos(request: SearchVideosRequest): void;
  getMentorships(request: SearchMentorshipsRequest): void;
  getUsers(request: SearchUsersRequest): void;
  getUser(userId: string): any;
  updateAppUser(userId: string, request: UpdateUserRequest): void;
}

const mapStateToProps = ({
  appUser,
  user,
  users,
  playlists,
  videos,
  mentorships,
}: AppState): OthersProfilePageProps => ({
  appUser,
  user,
  users,
  playlists,
  videos,
  mentorships,
});

const mapDispatch: OthersProfileDispatchProps = {
  getPlaylists: getPlaylistsThunk,
  getVideos: getVideosThunk,
  getMentorships: getMentorshipsThunk,
  getUsers: getUsersThunk,
  getUser: getUserThunk,
  updateAppUser: updateAppUserThunk,
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
