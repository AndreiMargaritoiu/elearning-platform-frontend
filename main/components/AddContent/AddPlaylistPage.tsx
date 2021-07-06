import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@material-ui/core';
import React, { FC, useState } from 'react';
import { Autocomplete, AutocompleteRenderOptionState } from '@material-ui/lab';

import { FilterCategories } from '../../domain/FilterCategories';
import { AddPlaylistRequest } from '../../domain/Playlist';
import { Video } from '../../domain/Video';
import {
  StyledAddContentContainer,
  StyledAddContentField,
  StyledAddContentRowField,
  StyledAddContentSectionTitle,
} from './AddContentStyles';
import { database } from '../../services/Firebase';
import { createSearchIndex } from '../../utils/createSearchIndex';
import { uploadFileAndReturnURL } from '../../utils/uploadFileAndReturnURL';
import { SweetAlertResult } from 'sweetalert2';
import { Context } from '../../Context';

export interface AddPlaylistPageProps {
  videos: Video[];
  addPlaylist(request: AddPlaylistRequest): any;
}

const AddPlaylistPage: FC<AddPlaylistPageProps> = (props) => {
  const { videos, addPlaylist } = props;

  const [newPlaylist, setNewPlaylist] = useState<AddPlaylistRequest>({
    category: FilterCategories.SCHOOL,
    videoRefs: [],
    thumbnailUrl: '',
    description: '',
    id: '',
    title: '',
    searchIndex: [],
  });
  const [image, setImage] = useState<File | undefined>(undefined);

  const isAddDisabled: boolean =
    newPlaylist.description.trim().length === 0 ||
    newPlaylist.title.trim().length === 0 ||
    !image;

  const handleAddPlaylist = async () => {
    const docRef = database.collection('playlists').doc();
    let addPlaylistRequest: AddPlaylistRequest = {
      ...newPlaylist,
      id: docRef.id,
      searchIndex: createSearchIndex(newPlaylist.title),
    };
    if (image) {
      const path: string = `/videos/${docRef.id}/${image.name}`;
      const thumbnailUrl: string = await uploadFileAndReturnURL(path, image);
      addPlaylistRequest = {
        ...addPlaylistRequest,
        thumbnailUrl,
      };
    }
    const res = await addPlaylist(addPlaylistRequest);
    if (res.isOk) {
      const result: SweetAlertResult = await Context.alertService.fire({
        text: 'Playlist has been added successfully',
        icon: 'success',
      });

      if (!result.dismiss) {
        setNewPlaylist({
          category: FilterCategories.SCHOOL,
          videoRefs: [],
          thumbnailUrl: '',
          description: '',
          id: '',
          title: '',
          searchIndex: [],
        });
      }
    } else {
      await Context.alertService.fire({
        text: 'An error has occured',
        icon: 'error',
      });
    }
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
    const selectedVideoIds: string[] = [];
    values.map((item) => selectedVideoIds.push(item.id));
    setNewPlaylist({
      ...newPlaylist,
      videoRefs: selectedVideoIds,
    });
  };

  return (
    <StyledAddContentContainer>
      <StyledAddContentSectionTitle>Playlist</StyledAddContentSectionTitle>
      <FormControl variant="outlined" className="text-field">
        <InputLabel htmlFor="component-outlined">Title</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={newPlaylist.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewPlaylist({
              ...newPlaylist,
              title: event.target.value,
            })
          }
          label="Title"
        />
      </FormControl>
      <FormControl variant="outlined" className="text-field">
        <InputLabel htmlFor="component-outlined">Description</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={newPlaylist.description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewPlaylist({
              ...newPlaylist,
              description: event.target.value,
            })
          }
          label="Description"
        />
      </FormControl>
      <FormControl variant="outlined" className="text-field">
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={newPlaylist.category}
          label="Category"
          onChange={(event: any) => {
            setNewPlaylist({
              ...newPlaylist,
              category: event.target.value,
            });
          }}
        >
          <MenuItem value={FilterCategories.SCHOOL}>
            {FilterCategories.SCHOOL}
          </MenuItem>
          <MenuItem value={FilterCategories.FACULTY}>
            {FilterCategories.FACULTY}
          </MenuItem>
          <MenuItem value={FilterCategories.OTHER}>
            {FilterCategories.OTHER}
          </MenuItem>
        </Select>
      </FormControl>
      <StyledAddContentRowField>
        <StyledAddContentField className="margin-right">
          Thumbnail:
        </StyledAddContentField>
        <input
          type="file"
          accept="image/*"
          onChange={(e: any) => {
            setImage(e.target.files[0]);
          }}
        />
      </StyledAddContentRowField>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={videos}
        disableCloseOnSelect
        className="text-field"
        getOptionLabel={(option: Video) => option.title}
        PopperComponent={Pop}
        onChange={onSelectedChange}
        renderOption={(
          option: Video,
          { selected }: AutocompleteRenderOptionState,
        ) => (
          <React.Fragment>
            <Checkbox checked={selected} />
            {option.title}
          </React.Fragment>
        )}
        style={{ width: '100%' }}
        renderInput={(params: any) => (
          <TextField
            {...params}
            variant="outlined"
            label="Selected videos"
            placeholder="Options"
          />
        )}
      />
      <Button
        className={`add-button ${isAddDisabled ? 'disabled' : ''}`}
        disabled={isAddDisabled}
        onClick={handleAddPlaylist}
      >
        ADD
      </Button>
    </StyledAddContentContainer>
  );
};

export { AddPlaylistPage };
