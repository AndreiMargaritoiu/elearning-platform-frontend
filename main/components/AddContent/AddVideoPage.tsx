import React, { FC, useState } from 'react';

import { AddVideoRequest } from '../../domain/Video';
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
import { SweetAlertResult } from 'sweetalert2';
import { Context } from '../../Context';

export interface AddVideoPageProps {
  addVideo(request: AddVideoRequest): any;
}

const AddVideoPage: FC<AddVideoPageProps> = (props) => {
  const { addVideo } = props;

  const [newVideo, setNewVideo] = useState<AddVideoRequest>({
    videoUrl: '',
    thumbnailUrl: '',
    description: '',
    id: '',
    title: '',
    searchIndex: [],
  });
  const [image, setImage] = useState<File | undefined>(undefined);
  const [video, setVideo] = useState<File | undefined>(undefined);

  const isAddDisabled: boolean =
    newVideo.description.trim().length === 0 ||
    newVideo.title.trim().length === 0 ||
    !image ||
    !video;

  const handleAddVideo = async () => {
    const docRef = database.collection('videos').doc();
    let addVideoRequest: AddVideoRequest = {
      ...newVideo,
      id: docRef.id,
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
    const res = await addVideo(addVideoRequest);
    if (res.isOk) {
      const result: SweetAlertResult = await Context.alertService.fire({
        text: 'Video has been added successfully',
        icon: 'success',
      });

      if (!result.dismiss) {
        setNewVideo({
          videoUrl: '',
          thumbnailUrl: '',
          description: '',
          id: '',
          title: '',
          searchIndex: [],
        });
        setImage(undefined);
        setVideo(undefined);
      }
    } else {
      await Context.alertService.fire({
        text: 'An error has occured',
        icon: 'error',
      });
    }
  };

  return (
    <StyledAddContentContainer>
      <StyledAddContentSectionTitle>Video</StyledAddContentSectionTitle>
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
            setVideo(e.target.files[0]);
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
      <Button
        className={`add-button ${isAddDisabled ? 'disabled' : ''}`}
        disabled={isAddDisabled}
        onClick={handleAddVideo}
      >
        ADD
      </Button>
    </StyledAddContentContainer>
  );
};

export { AddVideoPage };
