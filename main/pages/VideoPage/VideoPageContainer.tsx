import React from 'react';
import { connect } from 'react-redux';

import { Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { getVideoThunk } from '../../store/video/getVideoThunk';
import { VideoPage } from './VideoPage';

export interface VideoPageProps {
  video: Video;
}

const mapStateToProps = ({ video }: AppState): VideoPageProps => ({
  video,
});

export const VideoPageContainer = connect<VideoPageProps, {}, {}, AppState>(
  mapStateToProps,
)((props: VideoPageProps) => {
  return <VideoPage {...props} />;
});
