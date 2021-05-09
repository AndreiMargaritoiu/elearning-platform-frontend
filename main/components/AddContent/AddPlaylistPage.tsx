import React, { FC, useState } from 'react';
import { AddPlaylistRequest } from '../../domain/Playlist';
import { User } from '../../domain/User';
import { Video } from '../../domain/Video';
import { StyledAddContentContainer } from './AddContentStyles';

export interface AddPlaylistPageProps {
  appUser: User;
  videos: Video[];
  addPlaylist(request: AddPlaylistRequest): void;
}

const AddPlaylistPage: FC<AddPlaylistPageProps> = (props) => {
  const { appUser, videos, addPlaylist } = props;

  return (
    <StyledAddContentContainer>
      <label>Playlist</label>
    </StyledAddContentContainer>
  );
};

export { AddPlaylistPage };
