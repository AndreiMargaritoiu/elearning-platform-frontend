import React, { FC, useEffect } from 'react';
import { Playlist } from '../../domain/Playlist';

import {
  PlaylistsFeedDispatchProps,
  PlaylistsFeedPageProps,
} from './PlaylistsFeedPageContainer';
import { StyledPlaylistsFeedPage } from './PlaylistsFeedPageStyles';

const PlaylistsFeedPage: FC<
  PlaylistsFeedPageProps & PlaylistsFeedDispatchProps
> = (props) => {
  const { playlists, getPlaylists } = props;

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

  console.log(playlists);

  return (
    <StyledPlaylistsFeedPage>
      {playlists.map((playlist: Playlist) => (
        <label>{playlist.title}</label>
      ))}
    </StyledPlaylistsFeedPage>
  );
};

export { PlaylistsFeedPage };
