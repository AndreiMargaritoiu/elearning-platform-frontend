import React, { FC, useState } from 'react';

import { AddVideoRequest } from '../../domain/Video';
import { User } from '../../domain/User';
import {
  StyledAddContentContainer,
  StyledAddContentField,
  StyledAddContentRowField,
  StyledAddContentSectionTitle,
} from './AddContentStyles';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { database } from '../../services/Firebase';
import { createSearchIndex } from '../../utils/createSearchIndex';
import { uploadFileAndReturnURL } from '../../utils/uploadFileAndReturnURL';

export interface AddVideoPageProps {
  appUser: User;
  addVideo(request: AddVideoRequest): void;
}

const AddVideoPage: FC<AddVideoPageProps> = (props) => {
  const { appUser, addVideo } = props;

  const [newVideo, setNewVideo] = useState<AddVideoRequest>({
    videoUrl: '',
    uid: '',
    thumbnailUrl: '',
    description: '',
    id: '',
    title: '',
    searchIndex: [],
  });
  const [image, setImage] = useState<File | undefined>(undefined);
  const [video, setVideo] = useState<File | undefined>(undefined);

  const handleAddVideo = async () => {
    const docRef = database.collection('videos').doc();
    let addVideoRequest: AddVideoRequest = {
      ...newVideo,
      id: docRef.id,
      uid: appUser.uid,
      searchIndex: createSearchIndex(newVideo.title),
    };
    if (image) {
      const path: string = `/videos/${docRef.id}/${image.name}`;
      const thumbnailUrl: string = await uploadFileAndReturnURL(path, image);
      addVideoRequest = {
        ...addVideoRequest,
        thumbnailUrl,
      };
    }
    if (video) {
      const path: string = `/videos/${docRef.id}/${video.name}`;
      const videoUrl: string = await uploadFileAndReturnURL(path, video);
      addVideoRequest = {
        ...addVideoRequest,
        videoUrl,
      };
    }
    console.log(addVideoRequest);
    addVideo(addVideoRequest);
  };

  return (
    <StyledAddContentContainer className="smaller">
      <StyledAddContentSectionTitle>Workshop</StyledAddContentSectionTitle>
      <FormControl variant="outlined" className="text-field">
        <InputLabel htmlFor="component-outlined">Title</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={newVideo.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewVideo({
              ...newVideo,
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
          value={newVideo.description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewVideo({
              ...newVideo,
              description: event.target.value,
            })
          }
          label="Description"
        />
      </FormControl>
      <StyledAddContentRowField>
        <StyledAddContentField className="margin-right">
          Video:
        </StyledAddContentField>
        <input
          type="file"
          accept="video/*"
          onChange={(e: any) => {
            setImage(e.target.files[0]);
          }}
        />
      </StyledAddContentRowField>
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
      <Button className="add-button" onClick={handleAddVideo}>
        ADD
      </Button>
    </StyledAddContentContainer>
  );
};

export { AddVideoPage };
