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

export interface PersonalPlaylistsFeedProps {
  playlists: Playlist[];
  deletePlaylist(playlistId: string): void;
  updatePlaylist(playlistId: string, request: UpdatePlaylistRequest): void;
}

export const PersonalPlaylistsFeed: React.FC<PersonalPlaylistsFeedProps> = (
  props: PersonalPlaylistsFeedProps,
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
          <Media
            queries={{
              mobile: `(max-width: 767px)`,
              tablet: `(min-width: 768px)`,
            }}
          >
            {(matches) =>
              !matches.mobile && matches.tablet ? (
                <StyledProfileContentCardDetails className="actions">
                  <Button
                    variant="contained"
                    className="first-button"
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
              ) : (
                <StyledProfileContentCardDetails className="actions">
                  <EditIcon
                    className="first-button"
                    onClick={() => handleEditPlaylist(playlist)}
                  />
                  <DeleteOutlineIcon
                    onClick={() => deletePlaylist(playlist.id)}
                  />
                </StyledProfileContentCardDetails>
              )
            }
          </Media>
        </StyledProfileContentCard>
      ))}
    </StyledProfileContent>
  );
};
