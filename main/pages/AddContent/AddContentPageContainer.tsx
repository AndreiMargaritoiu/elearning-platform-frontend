import React from 'react';
import { connect } from 'react-redux';

import { AddMentorshipRequest } from '../../domain/Mentorship';
import { AddPlaylistRequest } from '../../domain/Playlist';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { User } from '../../domain/User';
import { AddVideoRequest, Video } from '../../domain/Video';
import { AddWorkshopRequest } from '../../domain/Workshop';
import { AppState } from '../../store/AppState';
import { addMentorshipThunk } from '../../store/mentoring/addMentorshipThunk';
import { addPlaylistThunk } from '../../store/playlists/addPlaylistThunk';
import { addVideoThunk } from '../../store/videos/addVideoThunk';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { addWorkshopThunk } from '../../store/workshops/addWorkshopThunk';
import { AddContentPage } from './AddContentPage';

export interface AddContentPageProps {
  videos: Video[];
  appUser: User;
}

export interface AddContentPageDispatchProps {
  addWorkshop(request: AddWorkshopRequest): any;
  addMentorship(request: AddMentorshipRequest): any;
  addVideo(request: AddVideoRequest): any;
  addPlaylist(request: AddPlaylistRequest): any;
  getVideos(request: SearchVideosRequest): void;
}

const mapStateToProps = ({
  videos,
  appUser,
}: AppState): AddContentPageProps => ({
  videos,
  appUser,
});

const mapDispatch: AddContentPageDispatchProps = {
  addWorkshop: addWorkshopThunk,
  addMentorship: addMentorshipThunk,
  addVideo: addVideoThunk,
  addPlaylist: addPlaylistThunk,
  getVideos: getVideosThunk,
};

export const AddContentPageContainer = connect<
  AddContentPageProps,
  AddContentPageDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: AddContentPageProps & AddContentPageDispatchProps) => {
  return <AddContentPage {...props} />;
});
