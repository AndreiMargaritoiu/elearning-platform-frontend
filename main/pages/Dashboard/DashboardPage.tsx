import React, { FC, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

import { Video } from '../../domain/Video';
import {
  DashboardDispatchProps,
  DashboardPageProps,
} from './DashboardPageContainer';
import {
  StyledDashboard,
  StyledVideoCard,
  StyledVideoCardDescription,
  StyledVideoCardThumbnail,
  StyledVideoCardTitle,
  StyledVideoCardUserDiv,
} from './DashboardPageStyles';
import { Context } from '../../Context';

const DashboardPage: FC<DashboardPageProps & DashboardDispatchProps> = (
  props,
) => {
  const { appUser, videos, getVideos } = props;

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

  console.log(videos);

  return (
    <StyledDashboard>
      <Grid container spacing={3}>
        {videos.map((video: Video) => (
          <Grid item xs={12} sm={6} md={4}>
            <Link
              href={`${Context.BASE_PATH}/videos/[id]`}
              as={`${Context.BASE_PATH}/videos/${video.id}`}
            >
              <StyledVideoCard>
                <StyledVideoCardUserDiv>{video.uid}</StyledVideoCardUserDiv>
                <StyledVideoCardThumbnail
                  imgSrc={video.thumbnailUrl || ''}
                  role="img"
                />
                <StyledVideoCardTitle>{video.title}</StyledVideoCardTitle>
                <StyledVideoCardDescription>
                  {video.description}
                </StyledVideoCardDescription>
              </StyledVideoCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </StyledDashboard>
  );
};

export { DashboardPage };
