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
  VideoModalBodyContainer,
  VideoModalContainer,
  VideoModalFooterContainer,
  VideoModalHeaderContainer,
  modalStyles,
} from './EditVideoModalStyles';
import { UpdateVideoRequest } from '../../../domain/Video';
import { createSearchIndex } from '../../../utils/createSearchIndex';

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

  const handleSubmit = () => {
    const updateVideoReqest: UpdateVideoRequest = {
      title: modalTitle,
      searchIndex: createSearchIndex(modalTitle),
      description: modalDescription,
    };
    updateVideoInfo(id, updateVideoReqest);
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
              />
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
            </FormControl>
          </VideoModalBodyContainer>
        </form>
        <VideoModalFooterContainer>
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
        </VideoModalFooterContainer>
      </VideoModalContainer>
    </Modal>
  );
};
