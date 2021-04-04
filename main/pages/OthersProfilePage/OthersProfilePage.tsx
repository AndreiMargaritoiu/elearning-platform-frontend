import React, { FC, useEffect } from 'react';

import { Video } from '../../domain/Video';
import {
  ProfileDispatchProps,
  OthersProfilePageProps,
} from './OthersProfilePageContainer';
import { StyledOthersProfilePage } from './OthersProfilePageStyles';

const OthersProfilePage: FC<OthersProfilePageProps & ProfileDispatchProps> = (
  props,
) => {
  const { playlists, videos, getPlaylists, getVideos } = props;

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

  console.log(playlists);
  console.log(videos);

  return (
    <StyledOthersProfilePage>
      {videos.map((video: Video) => (
        <label>{video.title}</label>
      ))}
    </StyledOthersProfilePage>
  );
};

export { OthersProfilePage };
