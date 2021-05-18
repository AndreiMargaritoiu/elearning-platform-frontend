import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Media from 'react-media';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { Playlist, UpdatePlaylistRequest } from '../../../domain/Playlist';
import {
  EditPlaylistModal,
  PlaylistModalState,
} from '../EditPlaylistModal/EditPlaylistModal';
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
