import React from 'react';

import { Video } from '../../../domain/Video';
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
      {videos.map((video, index) => (
        <Link
          key={`users-video-item-${index}`}
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
