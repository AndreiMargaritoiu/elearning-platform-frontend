import { Grid } from '@material-ui/core';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { Context } from '../../Context';
import { Playlist } from '../../domain/Playlist';

import {
  PlaylistsFeedDispatchProps,
  PlaylistsFeedPageProps,
} from './PlaylistsFeedPageContainer';
import {
  StyledPlaylistCard,
  StyledPlaylistCardDescription,
  StyledPlaylistCardThumbnail,
  StyledPlaylistCardTitle,
  StyledPlaylistCardUserDiv,
  StyledPlaylistsFeedPage,
} from './PlaylistsFeedPageStyles';

const PlaylistsFeedPage: FC<
  PlaylistsFeedPageProps & PlaylistsFeedDispatchProps
> = (props) => {
  const { playlists, getPlaylists } = props;

  console.log(playlists);

  return (
    <StyledPlaylistsFeedPage>
      <Grid container spacing={3}>
        {playlists.map((playlist: Playlist) => (
          <Grid item xs={12} sm={6} md={4}>
            <Link
              href={`${Context.BASE_PATH}/playlists/[id]`}
              as={`${Context.BASE_PATH}/playlists/${playlist.id}`}
            >
              <StyledPlaylistCard>
                <StyledPlaylistCardUserDiv>
                  {playlist.uid}
                </StyledPlaylistCardUserDiv>
                <StyledPlaylistCardThumbnail
                  imgSrc={playlist.thumbnailUrl || ''}
                  role="img"
                />
                <StyledPlaylistCardTitle>
                  {playlist.title}
                </StyledPlaylistCardTitle>
                <StyledPlaylistCardDescription>
                  No of videos: {playlist.videoRefs.length}
                </StyledPlaylistCardDescription>
                <StyledPlaylistCardDescription>
                  {playlist.description}
                </StyledPlaylistCardDescription>
              </StyledPlaylistCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </StyledPlaylistsFeedPage>
  );
};

export { PlaylistsFeedPage };
