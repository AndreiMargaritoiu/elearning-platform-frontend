import React, { FC, useEffect } from 'react';

import {
  StyledDashboard,
  StyledVideoCard,
  StyledVideoCardThumbnail,
  StyledVideoCardTitle,
  StyledVideoCardDescription,
} from '../Dashboard/DashboardPageStyles';
import { VideoPageProps } from './VideoPageContainer';

const VideoPage: FC<VideoPageProps> = (props) => {
  const { video } = props;

  console.log(video);

  return (
    <StyledDashboard>
      <StyledVideoCard>
        <StyledVideoCardThumbnail
          imgSrc={video.thumbnailUrl || ''}
          role="img"
        />
        <StyledVideoCardTitle>{video.title}</StyledVideoCardTitle>
        <StyledVideoCardDescription>
          {video.description}
        </StyledVideoCardDescription>
      </StyledVideoCard>
    </StyledDashboard>
  );
};

export { VideoPage };
