import Modal from 'react-modal';
import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

import {
  PlaylistModalBodyContainer,
  PlaylistModalContainer,
  PlaylistModalFooterContainer,
  PlaylistModalHeaderContainer,
  modalStyles,
} from './EditPlaylistModalStyles';
import { UpdatePlaylistRequest } from '../../../domain/Playlist';
import { createSearchIndex } from '../../../utils/createSearchIndex';

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

  const handleSubmit = () => {
    updatePlaylistInfo(id, {
      title: modalTitle,
      searchIndex: createSearchIndex(modalTitle),
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
              />
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <FormControl variant="outlined" className="text-field-two">
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
            className="close-button"
            onClick={() =>
              setModalState({
                ...modalState,
                isOpen: false,
              })
            }
          >
            CLOSE
          </Button>
          <Button className="save-button" onClick={handleSubmit}>
            SAVE
          </Button>
        </PlaylistModalFooterContainer>
      </PlaylistModalContainer>
    </Modal>
  );
};
