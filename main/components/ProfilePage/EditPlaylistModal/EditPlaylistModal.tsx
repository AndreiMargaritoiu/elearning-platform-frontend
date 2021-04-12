import Modal from 'react-modal';
import React, { useState } from 'react';

import {
  PlaylistModalBodyContainer,
  PlaylistModalContainer,
  PlaylistModalFooterContainer,
  PlaylistModalHeaderContainer,
  modalStyles,
} from './EditPlaylistModalStyles';
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import { UpdatePlaylistRequest } from '../../../domain/Playlist';

export interface PlaylistModalState {
  isOpen: boolean;
  id: string;
  title: string;
  description: string;
  videoRefs: string[];
}

export interface PlaylistModalProps {
  modalState: PlaylistModalState;
  setModalState: (setOpenState: PlaylistModalState) => void;
  updatePlaylistInfo(playlistId: string, request: UpdatePlaylistRequest): void;
}

export const EditPlaylistModal: React.FC<PlaylistModalProps> = (
  props: PlaylistModalProps,
) => {
  const { modalState, setModalState, updatePlaylistInfo } = props;
  const { isOpen, id, description, title } = modalState;

  const [modalTitle, setModalTitle] = useState<string>(title);
  const [modalDescription, setModalDescription] = useState<string>(description);

  const handleSubmit = (event: any) => {
    updatePlaylistInfo(id, {
      title: modalTitle,
      description: modalDescription,
    });
    setModalState({
      ...modalState,
      isOpen: false,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() =>
        setModalState({
          ...modalState,
          isOpen: false,
        })
      }
      style={modalStyles}
      ariaHideApp={false}
    >
      <PlaylistModalContainer>
        <PlaylistModalHeaderContainer>
          Edit playlist details
        </PlaylistModalHeaderContainer>
        <form onSubmit={handleSubmit}>
          <PlaylistModalBodyContainer>
            <FormControl variant="outlined" className="text-field">
              <InputLabel htmlFor="component-outlined">Title</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={modalTitle}
                label="Title"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setModalTitle(event.target.value)
                }
                startAdornment={
                  <InputAdornment position="start">
                    <EuroIcon />
                  </InputAdornment>
                }
              />
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <FormControl variant="outlined" className="text-field">
              <InputLabel htmlFor="component-outlined">Description</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={modalDescription}
                label="Description"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setModalDescription(event.target.value)
                }
              />
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </PlaylistModalBodyContainer>
        </form>
        <PlaylistModalFooterContainer>
          <Button
            className="secondary"
            onClick={() =>
              setModalState({
                ...modalState,
                isOpen: false,
              })
            }
          >
            CLOSE
          </Button>
          <Button onClick={handleSubmit}>SAVE</Button>
        </PlaylistModalFooterContainer>
      </PlaylistModalContainer>
    </Modal>
  );
};
