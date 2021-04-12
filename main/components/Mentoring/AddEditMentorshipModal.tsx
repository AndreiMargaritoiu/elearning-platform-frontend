import Modal from 'react-modal';
import React, { useState } from 'react';

import {
  MentoringModalBodyContainer,
  MentoringModalContainer,
  MentoringModalFooterContainer,
  MentoringModalHeaderContainer,
  modalStyles,
} from './AddEditMentorshipModalStyles';
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import { UpdateMentorshipRequest } from '../../domain/Mentorship';

export interface MentoringModalState {
  isOpen: boolean;
  isEdit: boolean;
  id: string;
  description: string;
  price: number;
}

export interface MentoringModalProps {
  modalState: MentoringModalState;
  setModalState: (setOpenState: MentoringModalState) => void;
  updateMentoringInfo(
    mentorshipId: string,
    request: UpdateMentorshipRequest,
  ): void;
}

export const MentoringModal: React.FC<MentoringModalProps> = (
  props: MentoringModalProps,
) => {
  const { modalState, setModalState, updateMentoringInfo } = props;
  const { isOpen, isEdit, id, description, price } = modalState;

  const [modalDescription, setModalDescription] = useState<string>(description);
  const [modalPrice, setModalPrice] = useState<number>(price);

  const handleSubmit = (event: any) => {
    updateMentoringInfo(id, {
      description: modalDescription,
      price: modalPrice,
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
      <MentoringModalContainer>
        <MentoringModalHeaderContainer>
          {isEdit ? 'Edit mentorship details' : 'Add mentorship'}
        </MentoringModalHeaderContainer>
        <form onSubmit={handleSubmit}>
          <MentoringModalBodyContainer>
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
            <FormControl variant="outlined" className="text-field">
              <InputLabel htmlFor="component-outlined">Price</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={modalPrice}
                label="Price"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setModalPrice(parseInt(event.target.value, 10))
                }
                startAdornment={
                  <InputAdornment position="start">
                    <EuroIcon />
                  </InputAdornment>
                }
              />
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </MentoringModalBodyContainer>
        </form>
        <MentoringModalFooterContainer>
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
        </MentoringModalFooterContainer>
      </MentoringModalContainer>
    </Modal>
  );
};
