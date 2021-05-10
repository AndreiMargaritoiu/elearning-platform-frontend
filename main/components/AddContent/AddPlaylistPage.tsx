import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@material-ui/core';
import React, { FC, useState } from 'react';
import { FilterCategories } from '../../domain/FilterCategories';
import { AddPlaylistRequest } from '../../domain/Playlist';
import { User } from '../../domain/User';
import { Video } from '../../domain/Video';
import { database } from '../../services/Firebase';
import { createSearchIndex } from '../../utils/createSearchIndex';
import { uploadFileAndReturnURL } from '../../utils/uploadFileAndReturnURL';
import { StyledAddContentContainer } from './AddContentStyles';

export interface AddPlaylistPageProps {
  appUser: User;
  videos: Video[];
  addPlaylist(request: AddPlaylistRequest): void;
}

const AddPlaylistPage: FC<AddPlaylistPageProps> = (props) => {
  const { appUser, videos, addPlaylist } = props;

  const [newPlaylist, setNewPlaylist] = useState<AddPlaylistRequest>({
    category: FilterCategories.SCHOOL,
    videoRefs: [],
    uid: '',
    thumbnailUrl: '',
    description: '',
    id: '',
    title: '',
    searchIndex: [],
  });
  const [image, setImage] = useState<File | undefined>(undefined);

  console.log(videos);

  const handleAddPlaylist = async () => {
    const docRef = database.collection('playlists').doc();
    let addPlaylistRequest: AddPlaylistRequest = {
      ...newPlaylist,
      id: docRef.id,
      uid: appUser.uid,
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
    console.log(addPlaylistRequest);
    addPlaylist(addPlaylistRequest);
  };

  return (
    <StyledAddContentContainer>
      <label>Playlist</label>
      <FormControl
        variant="outlined"
        className="text-field qa-automation-admin-panel-first-name"
      >
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
      <FormControl
        variant="outlined"
        className="text-field qa-automation-admin-panel-first-name"
      >
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
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={newPlaylist.category}
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
      <label>Thumbnail</label>
      <input
        type="file"
        onChange={(e: any) => {
          setImage(e.target.files[0]);
        }}
      />
      <label>Selected videos</label>
      {videos.map((video) => (
        <FormControlLabel
          value={video.id}
          control={
            <Checkbox
              color="primary"
              checked={newPlaylist.videoRefs.includes(video.id)}
              onChange={(e) => {
                const updatedVideosArray: string[] = newPlaylist.videoRefs.includes(
                  video.id,
                )
                  ? newPlaylist.videoRefs.filter(
                      (videoId) => videoId !== video.id,
                    )
                  : [...newPlaylist.videoRefs, video.id];
                setNewPlaylist({
                  ...newPlaylist,
                  videoRefs: updatedVideosArray,
                });
              }}
            />
          }
          label={video.title}
          labelPlacement="start"
        />
      ))}
      <Button onClick={handleAddPlaylist}>ADD PLAYLIST</Button>
    </StyledAddContentContainer>
  );
};

export { AddPlaylistPage };
