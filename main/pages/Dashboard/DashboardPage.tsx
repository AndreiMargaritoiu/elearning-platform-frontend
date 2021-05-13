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
} from './DashboardPageStyles';
import { Context } from '../../Context';
import { User } from '../../domain/User';
import {
  StyledPlaylistCardDescription,
  StyledPlaylistCardTitle,
  StyledPlaylistCardUserDiv,
  StyledPlaylistUsername,
  StyledPlaylistUserProfilePic,
} from '../PlaylistsFeedPage/PlaylistsFeedPageStyles';

const DashboardPage: FC<DashboardPageProps & DashboardDispatchProps> = (
  props,
) => {
  const { videos, users, getVideos } = props;

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

  console.log(videos);

  const displayedUser = (userId: string): string => {
    const foundUser: User | undefined = users.find(
      (item) => item.uid === userId,
    );
    return foundUser ? foundUser.username : '';
  };

  const getUserProfilePic = (userId: string): string => {
    const foundUser: User | undefined = users.find(
      (item) => item.uid === userId,
    );
    return foundUser ? foundUser.photoUrl : '';
  };

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
                <StyledPlaylistCardUserDiv>
                  <StyledPlaylistUserProfilePic
                    imgSrc={getUserProfilePic(video.uid)}
                    role="img"
                  />
                  <StyledPlaylistUsername>
                    {displayedUser(video.uid)}
                  </StyledPlaylistUsername>
                </StyledPlaylistCardUserDiv>
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
                  <StyledPlaylistCardTitle>
                    {video.title}
                  </StyledPlaylistCardTitle>
                  <StyledPlaylistCardDescription>
                    {video.description}
                  </StyledPlaylistCardDescription>
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
