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
  StyledVideoCardContentDiv,
  StyledVideoCardDescription,
  StyledVideoCardThumbnail,
  StyledVideoCardTitle,
  StyledVideoCardUserDiv,
} from './DashboardPageStyles';
import { Context } from '../../Context';
import { User } from '../../domain/User';

const DashboardPage: FC<DashboardPageProps & DashboardDispatchProps> = (
  props,
) => {
  const { appUser, videos, users, getVideos } = props;

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

  console.log(videos);

  // const getUsername = (userId: string): string => {
  //   if (users.length > 0) {
  //     const foundUser: User | undefined = users.find(
  //     (user: User) => user.uid === userId,
  //   );
  //   return foundUser ? foundUser.username : '';
  //   }

  //   return '';
  // };

  return (
    <StyledDashboard>
      <Grid container spacing={3}>
        {videos.map((video: Video) => (
          <Grid item xs={12} sm={6} md={4}>
            <StyledVideoCard>
              <Link
                href={`${Context.BASE_PATH}/profiles/[id]`}
                as={`${Context.BASE_PATH}/profiles/${video.uid}`}
              >
                <StyledVideoCardUserDiv>{video.uid}</StyledVideoCardUserDiv>
              </Link>
              <Link
                href={`${Context.BASE_PATH}/videos/[id]`}
                as={`${Context.BASE_PATH}/videos/${video.id}`}
              >
                <StyledVideoCardContentDiv>
                  <StyledVideoCardThumbnail
                    imgSrc={video.thumbnailUrl || ''}
                    role="img"
                  />
                  <StyledVideoCardTitle>{video.title}</StyledVideoCardTitle>
                  <StyledVideoCardDescription>
                    {video.description}
                  </StyledVideoCardDescription>
                </StyledVideoCardContentDiv>
              </Link>
            </StyledVideoCard>
          </Grid>
        ))}
      </Grid>
    </StyledDashboard>
  );
};

export { DashboardPage };
