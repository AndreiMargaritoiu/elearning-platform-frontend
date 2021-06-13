import React from 'react';
import { connect } from 'react-redux';
import { SearchUsersRequest } from '../../domain/SearchUsersRequest';

import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { Tracking, TrackItemRequest } from '../../domain/Tracking';
import { User } from '../../domain/User';
import { Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getTrackedItemsThunk } from '../../store/tracking/getTrackedItemsThunk';
import { saveTrackedItemThunk } from '../../store/tracking/saveTrackedItemThunk';
import { getUsersThunk } from '../../store/users/getUsersThunks';
import { getVideoThunk } from '../../store/video/getVideoThunk';
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
  getVideo(videoId: string): any;
  getVideos(request: SearchVideosRequest): void;
  getUsers(request: SearchUsersRequest): void;
  getTrackedItems(): void;
  saveTrackedItem(request: TrackItemRequest): void;
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
  getVideo: getVideoThunk,
  getVideos: getVideosThunk,
  getUsers: getUsersThunk,
  getTrackedItems: getTrackedItemsThunk,
  saveTrackedItem: saveTrackedItemThunk,
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
