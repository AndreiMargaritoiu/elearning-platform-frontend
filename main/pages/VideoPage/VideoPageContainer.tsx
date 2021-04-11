import React from 'react';
import { connect } from 'react-redux';

import { Video } from '../../domain/Video';
import { AppState } from '../../store/AppState';
import { VideoPage } from './VideoPage';

export interface VideoPageProps {
  video: Video;
  videos: Video[];
}

const mapStateToProps = ({ video, videos }: AppState): VideoPageProps => ({
  video,
  videos,
});

export const VideoPageContainer = connect<VideoPageProps, {}, {}, AppState>(
  mapStateToProps,
)((props: VideoPageProps) => {
  return <VideoPage {...props} />;
});
