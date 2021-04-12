import { Button } from '@material-ui/core';
import React, { useState } from 'react';

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
} from './UsersContentFeedStyles';

export interface UsersPlaylistsFeedProps {
  playlists: Playlist[];
  deletePlaylist?(playlistId: string): void;
  updatePlaylist?(playlistId: string, request: UpdatePlaylistRequest): void;
}

export const UsersPlaylistsFeed: React.FC<UsersPlaylistsFeedProps> = (
  props: UsersPlaylistsFeedProps,
) => {
  const { playlists, deletePlaylist, updatePlaylist } = props;

  const [modalState, setModalState] = useState<PlaylistModalState>({
    isOpen: false,
    id: '',
    title: '',
    description: '',
    videoRefs: [],
  });

  const handleEditPlaylist = (playlist: Playlist) => {
    setModalState({
      isOpen: true,
      id: playlist.id,
      title: playlist.title,
      description: playlist.description,
      videoRefs: playlist.videoRefs,
    });
  };

  return (
    <StyledProfileContent>
      <>
        {modalState.isOpen && updatePlaylist && (
          <EditPlaylistModal
            modalState={modalState}
            setModalState={setModalState}
            updatePlaylistInfo={updatePlaylist}
          />
        )}
      </>
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
              No of playlists: {playlist.videoRefs.length}
            </StyledProfileContentDescription>
            <StyledProfileContentDescription>
              {playlist.description}
            </StyledProfileContentDescription>
          </StyledProfileContentCardDetails>
          {deletePlaylist && (
            <StyledProfileContentCardDetails className="actions">
              <Button
                variant="contained"
                onClick={() => handleEditPlaylist(playlist)}
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
          )}
        </StyledProfileContentCard>
      ))}
    </StyledProfileContent>
  );
};
