import React, { FC, useEffect } from 'react';

import { Video } from '../../domain/Video';
import { ProfileDispatchProps, ProfilePageProps } from './ProfilePageContainer';
import { StyledProfilePage } from './ProfilePageStyles';

const ProfilePage: FC<ProfilePageProps & ProfileDispatchProps> = (props) => {
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
    <StyledProfilePage>
      {videos.map((video: Video) => (
        <label>{video.title}</label>
      ))}
    </StyledProfilePage>
  );
};

export { ProfilePage };
