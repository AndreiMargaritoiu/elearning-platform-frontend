import React, { FC } from 'react';

import {
  DiscoverPageProps,
  DiscoverPageDispatchProps,
} from './DiscoverPageContainer';
import { StyledDiscoverPageCotnainer } from './DiscoverPageStyles';

const DiscoverPage: FC<DiscoverPageProps & DiscoverPageDispatchProps> = (
  props,
) => {
  const { videos, workshops, getTrendingVideos, getWorkshops } = props;

  console.log(videos);

  return (
    <StyledDiscoverPageCotnainer>
      <label>hello</label>
    </StyledDiscoverPageCotnainer>
  );
};

export { DiscoverPage };
