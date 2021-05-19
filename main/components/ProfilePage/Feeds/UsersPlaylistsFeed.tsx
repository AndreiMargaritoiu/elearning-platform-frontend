import React, { useState } from 'react';

import { Playlist } from '../../../domain/Playlist';
import {
  StyledProfileContentCard,
  StyledProfileContentThumbnail,
  StyledProfileContentCardDetails,
  StyledProfileContentTitle,
  StyledProfileContentDescription,
  StyledProfileContent,
  StyledProfilePlaylistThumbnailDiv,
  StyledProfilePlaylistVideosLength,
} from './UsersContentFeedStyles';
import Link from 'next/link';
import { Context } from '../../../Context';

export interface UsersPlaylistsFeedProps {
  playlists: Playlist[];
}

export const UsersPlaylistsFeed: React.FC<UsersPlaylistsFeedProps> = (
  props: UsersPlaylistsFeedProps,
) => {
  const { playlists } = props;

  return (
    <StyledProfileContent>
      {playlists.map((playlist: Playlist) => (
        <Link
          href={`${Context.BASE_PATH}/playlists/[id]`}
          as={`${Context.BASE_PATH}/playlists/${playlist.id}`}
        >
          <StyledProfileContentCard className="others-card">
            <StyledProfilePlaylistThumbnailDiv>
              <StyledProfileContentThumbnail
                imgSrc={playlist.thumbnailUrl || ''}
                role="img"
              />
              <StyledProfilePlaylistVideosLength>
                {playlist.videoRefs.length} videos
              </StyledProfilePlaylistVideosLength>
            </StyledProfilePlaylistThumbnailDiv>

            <StyledProfileContentCardDetails>
              <StyledProfileContentTitle>
                {playlist.title}
              </StyledProfileContentTitle>
              <StyledProfileContentDescription>
                {playlist.description}
              </StyledProfileContentDescription>
            </StyledProfileContentCardDetails>
          </StyledProfileContentCard>
        </Link>
      ))}
    </StyledProfileContent>
  );
};
