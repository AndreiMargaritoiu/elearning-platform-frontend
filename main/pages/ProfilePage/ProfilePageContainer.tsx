import React from 'react';
import { connect } from 'react-redux';
import { Mentorship, UpdateMentorshipRequest } from '../../domain/Mentorship';

import { Playlist, UpdatePlaylistRequest } from '../../domain/Playlist';
import { SearchMentorshipsRequest } from '../../domain/SearchMentorshipsRequest';
import { SearchPlaylistsRequest } from '../../domain/SearchPlaylistsRequest';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { User } from '../../domain/User';
import { UpdateVideoRequest, Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { deleteMentorshipThunk } from '../../store/mentoring/deleteMentorshipThunk';
import { getMentorshipsThunk } from '../../store/mentoring/getMentorshipsThunk';
import { updateMentorshipThunk } from '../../store/mentoring/updateMentorshipThunk';
import { deletePlaylistThunk } from '../../store/playlists/deletePlaylistThunk';
import { getPlaylistsThunk } from '../../store/playlists/getPlaylistsThunk';
import { updatePlaylistThunk } from '../../store/playlists/updatePlaylistThunk';
import { deleteVideoThunk } from '../../store/videos/deleteVideoThunk';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { updateVideoThunk } from '../../store/videos/updateVideoThunk';
import { ProfilePage } from './ProfilePage';

export interface ProfilePageProps {
  appUser: User;
  playlists: Playlist[];
  videos: Video[];
  mentorships: Mentorship[];
}

export interface ProfileDispatchProps {
  getPlaylists(request: SearchPlaylistsRequest): void;
  deletePlaylist(playlistId: string): void;
  updatePlaylist(playlistId: string, request: UpdatePlaylistRequest): void;
  getVideos(request: SearchVideosRequest): void;
  deleteVideo(videoId: string): void;
  updateVideo(videoId: string, request: UpdateVideoRequest): void;
  getMentorships(request: SearchMentorshipsRequest): void;
  deleteMentorship(mentorshipId: string): void;
  updateMentorship(
    mentorshipId: string,
    request: UpdateMentorshipRequest,
  ): void;
}

const mapStateToProps = ({
  appUser,
  playlists,
  videos,
  mentorships,
}: AppState): ProfilePageProps => ({
  appUser,
  playlists,
  videos,
  mentorships,
});

const mapDispatch: ProfileDispatchProps = {
  getPlaylists: getPlaylistsThunk,
  deletePlaylist: deletePlaylistThunk,
  updatePlaylist: updatePlaylistThunk,
  getVideos: getVideosThunk,
  deleteVideo: deleteVideoThunk,
  updateVideo: updateVideoThunk,
  getMentorships: getMentorshipsThunk,
  deleteMentorship: deleteMentorshipThunk,
  updateMentorship: updateMentorshipThunk,
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
