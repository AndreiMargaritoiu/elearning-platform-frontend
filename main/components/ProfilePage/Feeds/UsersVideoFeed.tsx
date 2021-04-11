import { Button } from '@material-ui/core';
import React from 'react';

import { Video, UpdateVideoRequest } from '../../../domain/Video';
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
  deleteVideo(videoId: string): void;
  updateVideo(videoId: string, request: UpdateVideoRequest): void;
}

export const UsersVideosFeed: React.FC<UsersVideosFeedProps> = (
  props: UsersVideosFeedProps,
) => {
  const { videos, deleteVideo, updateVideo } = props;

  return (
    <StyledProfileContent>
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
          <StyledProfileContentCardDetails className="actions">
            <Button
              variant="contained"
              // onClick={() => handleEditMentorship(mentorship)}
            >
              EDIT
            </Button>
            <Button variant="contained" onClick={() => deleteVideo(video.id)}>
              DELETE
            </Button>
          </StyledProfileContentCardDetails>
        </StyledProfileContentCard>
      ))}
    </StyledProfileContent>
  );
};
