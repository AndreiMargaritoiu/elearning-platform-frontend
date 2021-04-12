import Modal from 'react-modal';
import React, { useState } from 'react';

import {
  VideoModalBodyContainer,
  VideoModalContainer,
  VideoModalFooterContainer,
  VideoModalHeaderContainer,
  modalStyles,
} from './EditVideoModalStyles';
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import { UpdateVideoRequest } from '../../../domain/Video';

export interface VideoModalState {
  isOpen: boolean;
  id: string;
  title: string;
  description: string;
}

export interface VideoModalProps {
  modalState: VideoModalState;
  setModalState: (setOpenState: VideoModalState) => void;
  updateVideoInfo(videoId: string, request: UpdateVideoRequest): void;
}

export const EditVideoModal: React.FC<VideoModalProps> = (
  props: VideoModalProps,
) => {
  const { modalState, setModalState, updateVideoInfo } = props;
  const { isOpen, id, description, title } = modalState;

  const [modalTitle, setModalTitle] = useState<string>(title);
  const [modalDescription, setModalDescription] = useState<string>(description);

  const handleSubmit = (event: any) => {
    updateVideoInfo(id, {
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
      <VideoModalContainer>
        <VideoModalHeaderContainer>
          Edit video details
        </VideoModalHeaderContainer>
        <form onSubmit={handleSubmit}>
          <VideoModalBodyContainer>
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
          </VideoModalBodyContainer>
        </form>
        <VideoModalFooterContainer>
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
        </VideoModalFooterContainer>
      </VideoModalContainer>
    </Modal>
  );
};
