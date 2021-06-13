import { Grid } from '@material-ui/core';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

import { Context } from '../../Context';
import { FilterCategories } from '../../domain/FilterCategories';
import { Playlist } from '../../domain/Playlist';
import { SearchPlaylistsRequest } from '../../domain/SearchPlaylistsRequest';
import { SearchUsersRequest } from '../../domain/SearchUsersRequest';
import { User } from '../../domain/User';
import {
  StyledFilterItem,
  StyledFiltersBar,
} from '../MentoringPage/MentoringPageStyles';

import {
  PlaylistsFeedDispatchProps,
  PlaylistsFeedPageProps,
} from './PlaylistsFeedPageContainer';
import {
  StyledPlaylistCard,
  StyledPlaylistCardContentDiv,
  StyledPlaylistCardDescription,
  StyledPlaylistCardThumbnail,
  StyledPlaylistCardTitle,
  StyledPlaylistCardUserDiv,
  StyledPlaylistFeedTitle,
  StyledPlaylistsFeedPage,
  StyledPlaylistThumbnailDiv,
  StyledPlaylistUsername,
  StyledPlaylistUserProfilePic,
  StyledPlaylistVideosLength,
} from './PlaylistsFeedPageStyles';

const PlaylistsFeedPage: FC<
  PlaylistsFeedPageProps & PlaylistsFeedDispatchProps
> = (props) => {
  const { playlists, users, getPlaylists, getUsers } = props;

  const [chosenFilter, setChosenFilter] = useState<string>('All');

  useEffect(() => {
    const getUsersRequest = SearchUsersRequest.create();
    getUsers(getUsersRequest);
    const getPlaylistsReq = SearchPlaylistsRequest.create();
    getPlaylists(getPlaylistsReq);
  }, []);

  const predefinedFilters = [
    'All',
    FilterCategories.SCHOOL,
    FilterCategories.FACULTY,
    FilterCategories.OTHER,
  ];

  const handlePredefinedFilter = (filterItem: string) => {
    setChosenFilter(filterItem);
    if (filterItem !== 'All') {
      const request: SearchPlaylistsRequest = {
        category: filterItem,
      };
      getPlaylists(request);
    } else {
      getPlaylists({});
    }
  };

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
    return foundUser && foundUser.photoUrl ? foundUser.photoUrl : '';
  };

  return (
    <StyledPlaylistsFeedPage>
      <StyledPlaylistFeedTitle>
        Learn more, discover more
      </StyledPlaylistFeedTitle>
      <StyledFiltersBar>
        {predefinedFilters.map((filterItem) => (
          <StyledFilterItem
            active={chosenFilter === filterItem}
            onClick={() => handlePredefinedFilter(filterItem)}
          >
            {filterItem}
          </StyledFilterItem>
        ))}
      </StyledFiltersBar>
      <Grid container spacing={3}>
        {playlists.map((playlist: Playlist) => (
          <Grid item xs={12} sm={6} md={4}>
            <StyledPlaylistCard>
              <Link
                href={`${Context.BASE_PATH}/profiles/[id]`}
                as={`${Context.BASE_PATH}/profiles/${playlist.uid}`}
              >
                <StyledPlaylistCardUserDiv>
                  <StyledPlaylistUserProfilePic
                    imgSrc={getUserProfilePic(playlist.uid)}
                    role="img"
                  />
                  <StyledPlaylistUsername>
                    {displayedUser(playlist.uid)}
                  </StyledPlaylistUsername>
                </StyledPlaylistCardUserDiv>
              </Link>
              <Link
                href={`${Context.BASE_PATH}/playlists/[id]`}
                as={`${Context.BASE_PATH}/playlists/${playlist.id}`}
              >
                <StyledPlaylistCardContentDiv>
                  <StyledPlaylistThumbnailDiv>
                    <StyledPlaylistCardThumbnail
                      imgSrc={playlist.thumbnailUrl || ''}
                      role="img"
                    />
                    <StyledPlaylistVideosLength>
                      {playlist.videoRefs.length} videos
                    </StyledPlaylistVideosLength>
                  </StyledPlaylistThumbnailDiv>
                  <StyledPlaylistCardTitle>
                    {playlist.title}
                  </StyledPlaylistCardTitle>
                  <StyledPlaylistCardDescription>
                    {playlist.description}
                  </StyledPlaylistCardDescription>
                </StyledPlaylistCardContentDiv>
              </Link>
            </StyledPlaylistCard>
          </Grid>
        ))}
      </Grid>
    </StyledPlaylistsFeedPage>
  );
};

export { PlaylistsFeedPage };
