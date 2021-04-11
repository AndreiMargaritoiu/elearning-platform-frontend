import { Button } from '@material-ui/core';
import React from 'react';

import { Playlist, UpdatePlaylistRequest } from '../../../domain/Playlist';
import {
  StyledProfileContentCard,
  StyledProfileContentThumbnail,
  StyledProfileContentCardDetails,
  StyledProfileContentTitle,
  StyledProfileContentDescription,
  StyledProfileContent,
} from './UsersContentFeedStyles';

export interface UsersPlaylistsFeedProps {
  playlists: Playlist[];
  deletePlaylist(playlistId: string): void;
  updatePlaylist(playlistId: string, request: UpdatePlaylistRequest): void;
}

export const UsersPlaylistsFeed: React.FC<UsersPlaylistsFeedProps> = (
  props: UsersPlaylistsFeedProps,
) => {
  const { playlists, deletePlaylist, updatePlaylist } = props;

  return (
    <StyledProfileContent>
      {playlists.map((playlist: Playlist) => (
        <StyledProfileContentCard>
          <StyledProfileContentThumbnail
            imgSrc={playlist.thumbnailUrl || ''}
            role="img"
          />
          <StyledProfileContentCardDetails>
            <StyledProfileContentTitle>
              {playlist.title}
            </StyledProfileContentTitle>
            <StyledProfileContentDescription>
              No of videos: {playlist.videoRefs.length}
            </StyledProfileContentDescription>
            <StyledProfileContentDescription>
              {playlist.description}
            </StyledProfileContentDescription>
          </StyledProfileContentCardDetails>
          <StyledProfileContentCardDetails className="actions">
            <Button
              variant="contained"
              // onClick={() => handleEditMentorship(mentorship)}
            >
              EDIT
            </Button>
            <Button
              variant="contained"
              onClick={() => deletePlaylist(playlist.id)}
            >
              DELETE
            </Button>
          </StyledProfileContentCardDetails>
        </StyledProfileContentCard>
      ))}
    </StyledProfileContent>
  );
};
