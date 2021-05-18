import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Media from 'react-media';

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

export interface PersonalVideosFeedProps {
  videos: Video[];
  deleteVideo(videoId: string): void;
  updateVideo(videoId: string, request: UpdateVideoRequest): void;
}

export const PersonalVideosFeed: React.FC<PersonalVideosFeedProps> = (
  props: PersonalVideosFeedProps,
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

          <Media
            queries={{
              mobile: `(max-width: 767px)`,
              tablet: `(min-width: 768px)`,
            }}
          >
            {(matches) =>
              !matches.mobile && matches.tablet ? (
                <StyledProfileContentCardDetails className="actions">
                  <Button
                    variant="contained"
                    className="first-button"
                    onClick={() => handleEditVideo(video)}
                  >
                    EDIT
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => deleteVideo(video.id)}
                  >
                    DELETE
                  </Button>
                </StyledProfileContentCardDetails>
              ) : (
                <StyledProfileContentCardDetails className="actions">
                  <EditIcon
                    className="first-button"
                    onClick={() => handleEditVideo(video)}
                  />
                  <DeleteOutlineIcon onClick={() => deleteVideo(video.id)} />
                </StyledProfileContentCardDetails>
              )
            }
          </Media>
        </StyledProfileContentCard>
      ))}
    </StyledProfileContent>
  );
};
