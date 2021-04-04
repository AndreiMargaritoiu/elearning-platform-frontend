import React, { FC, useEffect } from 'react';

import { Video } from '../../domain/Video';
import {
  PlaylistDispatchProps,
  PlaylistPageProps,
} from './PlaylistPageContainer';
import { StyledPlaylistPage } from './PlaylistPageStyles';

const PlaylistPage: FC<PlaylistPageProps & PlaylistDispatchProps> = (props) => {
  const { videos, getVideos } = props;

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

  console.log(videos);

  return (
    <StyledPlaylistPage>
      {videos.map((video: Video) => (
        <label>{video.title}</label>
      ))}
    </StyledPlaylistPage>
  );
};

export { PlaylistPage };
