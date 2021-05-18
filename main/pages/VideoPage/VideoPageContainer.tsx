import React from 'react';
import { connect } from 'react-redux';

import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { Tracking, TrackItemRequest } from '../../domain/Tracking';
import { User } from '../../domain/User';
import { Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getTrackedItemsThunk } from '../../store/tracking/getTrackedItemsThunk';
import { saveTrackedItemThunk } from '../../store/tracking/saveTrackedItemThunk';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { VideoPage } from './VideoPage';

export interface VideoPageProps {
  appUser: User;
  video: Video;
  videos: Video[];
  users: User[];
  trackings: Tracking[];
}

export interface VideoPageDispatchProps {
  getVideos(request: SearchVideosRequest): void;
  saveTrackedItem(request: TrackItemRequest): void;
  getTrackedItems(userId: string): void;
}

const mapStateToProps = ({
  appUser,
  video,
  videos,
  users,
  trackings,
}: AppState): VideoPageProps => ({
  appUser,
  video,
  videos,
  users,
  trackings,
});

const mapDispatch: VideoPageDispatchProps = {
  getVideos: getVideosThunk,
  saveTrackedItem: saveTrackedItemThunk,
  getTrackedItems: getTrackedItemsThunk,
};

export const VideoPageContainer = connect<
  VideoPageProps,
  VideoPageDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: VideoPageProps & VideoPageDispatchProps) => {
  return <VideoPage {...props} />;
});
