import { Grid } from '@material-ui/core';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { Context } from '../../Context';
import { FilterCategories } from '../../domain/Mentorship';
import { Playlist } from '../../domain/Playlist';
import { SearchPlaylistsRequest } from '../../domain/SearchPlaylistsRequest';
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
  StyledPlaylistsFeedPage,
  StyledPlaylistThumbnailDiv,
  StyledPlaylistVideosLength,
} from './PlaylistsFeedPageStyles';

const PlaylistsFeedPage: FC<
  PlaylistsFeedPageProps & PlaylistsFeedDispatchProps
> = (props) => {
  const { playlists, getPlaylists } = props;

  console.log(playlists);

  const [chosenFilter, setChosenFilter] = useState<string>('All');

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

  return (
    <StyledPlaylistsFeedPage>
      <StyledPlaylistCardTitle>
        Learn more, discover more
      </StyledPlaylistCardTitle>
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
                  {playlist.uid}
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
