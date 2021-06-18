import { Grid } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

import { Context } from '../../Context';
import { FilterCategories } from '../../domain/FilterCategories';
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
  const router = useRouter();

  useEffect(() => {
    const formattedQuery = SearchPlaylistsRequest.extractDataFromQuery(
      router.query,
    );
    if (formattedQuery.category) {
      setChosenFilter(formattedQuery.category);
    }
    const getUsersRequest = SearchUsersRequest.create();
    getUsers(getUsersRequest);
    const getPlaylistsReq = SearchPlaylistsRequest.create(formattedQuery);
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
      const newPath: string = `${Context.BASE_PATH}/playlists?category=${filterItem}`;
      router.push(newPath, newPath, {
        shallow: true,
      });
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
        {predefinedFilters.map((filterItem, index) => (
          <StyledFilterItem
            key={`filter-item-${index}`}
            active={chosenFilter === filterItem}
            onClick={() => handlePredefinedFilter(filterItem)}
          >
            {filterItem}
          </StyledFilterItem>
        ))}
      </StyledFiltersBar>
      <Grid container spacing={3}>
        {playlists.map((playlist, index) => (
          <Grid item xs={12} sm={6} md={4} key={`playlist-card-${index}`}>
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
