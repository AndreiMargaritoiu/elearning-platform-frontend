import React, { FC, useState } from 'react';
import { AddVideoRequest } from '../../domain/Video';
import { User } from '../../domain/User';
import { StyledAddContentContainer } from './AddContentStyles';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { database, storage } from '../../services/Firebase';

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

  const uploadFileAndGetURL = async (
    videoRef: string,
    file: File,
  ): Promise<any> => {
    const fileRef = storage.ref(`/videos/${videoRef}/${file.name}`);
    await fileRef.put(file);
    const fileRefPath: string = await fileRef.getDownloadURL();
    return fileRefPath;
  };

  const createSearchIndex = (text: string): string[] => {
    const result: string[] = [];
    const iter = (i: number, temp: string) => {
      if (i >= text.length) {
        result.push(temp);
        return;
      }
      iter(i + 1, temp + text[i]);
      iter(i + 1, temp);
    };

    iter(0, '');
    const finalResult: string[] = result.filter(
      (elem) => text.includes(elem) && elem.length > 0,
    );
    return finalResult;
  };

  const handleAddVideo = async () => {
    const docRef = database.collection('videos').doc();
    let addVideoRequest: AddVideoRequest = {
      ...newVideo,
      id: docRef.id,
      uid: appUser.uid,
      searchIndex: createSearchIndex(newVideo.title),
    };
    if (image) {
      const thumbnailUrl: string = await uploadFileAndGetURL(docRef.id, image);
      addVideoRequest = {
        ...addVideoRequest,
        thumbnailUrl,
      };
    }
    if (video) {
      const videoUrl: string = await uploadFileAndGetURL(docRef.id, video);
      addVideoRequest = {
        ...addVideoRequest,
        videoUrl,
      };
    }
    console.log(addVideoRequest);
    addVideo(addVideoRequest);
  };

  return (
    <StyledAddContentContainer>
      <label>Video</label>
      <FormControl
        variant="outlined"
        className="text-field qa-automation-admin-panel-first-name"
      >
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
      <FormControl
        variant="outlined"
        className="text-field qa-automation-admin-panel-first-name"
      >
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
      <label>Video</label>
      <input
        type="file"
        onChange={(e: any) => {
          setVideo(e.target.files[0]);
        }}
      />
      <label>Thumbnail</label>
      <input
        type="file"
        onChange={(e: any) => {
          setImage(e.target.files[0]);
        }}
      />
      <Button onClick={handleAddVideo}>ADD VIDEO</Button>
    </StyledAddContentContainer>
  );
};

export { AddVideoPage };
