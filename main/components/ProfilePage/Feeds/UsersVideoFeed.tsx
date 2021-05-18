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
import Link from 'next/link';
import { Context } from '../../../Context';

export interface UsersVideosFeedProps {
  videos: Video[];
}

export const UsersVideosFeed: React.FC<UsersVideosFeedProps> = (
  props: UsersVideosFeedProps,
) => {
  const { videos } = props;

  return (
    <StyledProfileContent>
      {videos.map((video: Video) => (
        <Link
          href={`${Context.BASE_PATH}/videos/[id]`}
          as={`${Context.BASE_PATH}/videos/${video.id}`}
        >
          <StyledProfileContentCard className="others-card">
            <StyledProfileContentThumbnail
              imgSrc={video.thumbnailUrl || ''}
              role="img"
            />
            <StyledProfileContentCardDetails>
              <StyledProfileContentTitle>
                {video.title}
              </StyledProfileContentTitle>
              <StyledProfileContentDescription>
                {video.description}
              </StyledProfileContentDescription>
            </StyledProfileContentCardDetails>
          </StyledProfileContentCard>
        </Link>
      ))}
    </StyledProfileContent>
  );
};
