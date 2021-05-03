import React from 'react';
import { connect } from 'react-redux';
import { AddPlaylistRequest } from '../../domain/Playlist';

import { AddVideoRequest, Video } from '../../domain/Video';
import { AddWorkshopRequest } from '../../domain/Workshop';
import { AppState } from '../../store/AppState';
import { addPlaylistThunk } from '../../store/playlists/addPlaylistThunk';
import { addVideoThunk } from '../../store/videos/addVideoThunk';
import { addWorkshopThunk } from '../../store/workshops/addWorkshopThunk';
import { AddContentPage } from './AddContentPage';

export interface AddContentPageProps {
  videos: Video[];
}

export interface AddContentPageDispatchProps {
  addWorkshop(request: AddWorkshopRequest): void;
  addVideo(request: AddVideoRequest): void;
  addPlaylist(request: AddPlaylistRequest): void;
}

const mapStateToProps = ({ videos }: AppState): AddContentPageProps => ({
  videos,
});

const mapDispatch: AddContentPageDispatchProps = {
  addWorkshop: addWorkshopThunk,
  addVideo: addVideoThunk,
  addPlaylist: addPlaylistThunk,
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
