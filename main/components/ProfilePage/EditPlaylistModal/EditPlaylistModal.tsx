import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@material-ui/core';
import { Autocomplete, AutocompleteRenderOptionState } from '@material-ui/lab';

import {
  PlaylistModalBodyContainer,
  PlaylistModalContainer,
  PlaylistModalFooterContainer,
  PlaylistModalHeaderContainer,
  modalStyles,
} from './EditPlaylistModalStyles';
import { UpdatePlaylistRequest } from '../../../domain/Playlist';
import { createSearchIndex } from '../../../utils/createSearchIndex';
import { Video } from '../../../domain/Video';

export interface PlaylistModalState {
  isOpen: boolean;
  id: string;
  title: string;
  description: string;
  videoRefs: string[];
  videos: Video[];
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
  const { isOpen, id, description, title, videoRefs, videos } = modalState;

  const [modalTitle, setModalTitle] = useState<string>(title);
  const [modalDescription, setModalDescription] = useState<string>(description);
  const [modalVideos, setModalVideos] = useState<Video[]>(
    videos.filter((item) => videoRefs.includes(item.id)),
  );

  // useEffect(() => {
  //   videos.map((item) => {
  //     if (videoRefs.includes(item.id)) {
  //       setModalVideos([...modalVideos, item.id]);
  //     }
  //   });
  // });

  const handleSubmit = () => {
    const selectedVideos: string[] = [];
    modalVideos.map((item) => selectedVideos.push(item.id));
    const editPlaylistRequest: UpdatePlaylistRequest = {
      title: modalTitle,
      searchIndex: createSearchIndex(modalTitle),
      description: modalDescription,
      videoRefs: selectedVideos,
    };
    updatePlaylistInfo(id, editPlaylistRequest);
    setModalState({
      ...modalState,
      isOpen: false,
    });
  };

  const Pop = (popupProps: any) => {
    const { className, anchorEl, style, ...rest } = popupProps;
    const bound = anchorEl.getBoundingClientRect();
    return (
      <div
        {...rest}
        style={{
          zIndex: 9999,
          width: bound.width,
        }}
      />
    );
  };

  const onSelectedChange = (event: any, values: Video[]) => {
    setModalVideos(values);
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
            </FormControl>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={videos}
              disableCloseOnSelect
              className="text-field"
              getOptionLabel={(option: Video) => option.title}
              PopperComponent={Pop}
              onChange={(event: any, values: Video[]) => setModalVideos(values)}
              defaultValue={videos.filter((item) =>
                videoRefs.includes(item.id),
              )}
              renderOption={(
                option: Video,
                { selected }: AutocompleteRenderOptionState,
              ) => (
                <React.Fragment>
                  <Checkbox checked={selected} />
                  {option.title}
                </React.Fragment>
              )}
              style={{ width: 400 }}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Selected videos"
                  placeholder="Options"
                />
              )}
            />
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
