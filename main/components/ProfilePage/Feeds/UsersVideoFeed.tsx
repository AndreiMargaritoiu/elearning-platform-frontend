import { Button } from '@material-ui/core';
import React, { useState } from 'react';

import { Video, UpdateVideoRequest } from '../../../domain/Video';
import {
  EditVideoModal,
  VideoModalState,
} from '../EditVideoModal/EditVideoModal';
import {
  StyledProfileContentCard,
  StyledProfileContentThumbnail,
  StyledProfileContentCardDetails,
  StyledProfileContentTitle,
  StyledProfileContentDescription,
  StyledProfileContent,
} from './UsersContentFeedStyles';

export interface UsersVideosFeedProps {
  videos: Video[];
  deleteVideo?(videoId: string): void;
  updateVideo?(videoId: string, request: UpdateVideoRequest): void;
}

export const UsersVideosFeed: React.FC<UsersVideosFeedProps> = (
  props: UsersVideosFeedProps,
) => {
  const { videos, deleteVideo, updateVideo } = props;

  const [modalState, setModalState] = useState<VideoModalState>({
    isOpen: false,
    id: '',
    title: '',
    description: '',
  });

  const handleEditVideo = (video: Video) => {
    setModalState({
      isOpen: true,
      id: video.id,
      title: video.title,
      description: video.description,
    });
  };

  return (
    <StyledProfileContent>
      <>
        {modalState.isOpen && updateVideo && (
          <EditVideoModal
            modalState={modalState}
            setModalState={setModalState}
            updateVideoInfo={updateVideo}
          />
        )}
      </>
      {videos.map((video: Video) => (
        <StyledProfileContentCard>
          <StyledProfileContentThumbnail
            imgSrc={video.thumbnailUrl || ''}
            role="img"
          />
          <StyledProfileContentCardDetails>
            <StyledProfileContentTitle>{video.title}</StyledProfileContentTitle>
            <StyledProfileContentDescription>
              {video.description}
            </StyledProfileContentDescription>
          </StyledProfileContentCardDetails>
          {deleteVideo && (
            <StyledProfileContentCardDetails className="actions">
              <Button
                variant="contained"
                onClick={() => handleEditVideo(video)}
              >
                EDIT
              </Button>
              <Button variant="contained" onClick={() => deleteVideo(video.id)}>
                DELETE
              </Button>
            </StyledProfileContentCardDetails>
          )}
        </StyledProfileContentCard>
      ))}
    </StyledProfileContent>
  );
};
