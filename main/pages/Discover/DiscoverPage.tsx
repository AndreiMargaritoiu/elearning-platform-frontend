import React, { FC } from 'react';
import Carousel from 'react-multi-carousel';
import { Context } from '../../Context';
import { Video } from '../../domain/Video';
import { MomentService } from '../../services/MomentService';
import {
  StyledVideoCardThumbnail,
  StyledVideoCardTitle,
  StyledVideoCardUserDiv,
} from '../Dashboard/DashboardPageStyles';
import { StyledSecondaryVideoCard } from '../VideoPage/VideoPageStyles';

import {
  DiscoverPageProps,
  DiscoverPageDispatchProps,
} from './DiscoverPageContainer';
import { StyledDiscoverPageContainer } from './DiscoverPageStyles';

const DiscoverPage: FC<DiscoverPageProps & DiscoverPageDispatchProps> = (
  props,
) => {
  const { videos, workshops, getTrendingVideos, getWorkshops } = props;

  console.log(videos);

  const DateService = new MomentService();

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
    },
    tablet: {
      breakpoint: {
        max: 1023,
        min: 570,
      },
      items: 2,
    },
    mobile: {
      breakpoint: {
        max: 569,
        min: 100,
      },
      items: 1,
    },
  };

  return (
    <StyledDiscoverPageContainer>
      <label>Workshops</label>
      <Carousel
        infinite
        containerClass="other-modules-carousel"
        draggable
        focusOnSelect={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={true}
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {workshops.map((workshop, index) => {
          return (
            <StyledSecondaryVideoCard
              key={index}
              // onClick={() => setCurrentVideoId(video.id)}
            >
              <StyledVideoCardTitle>
                {workshop.description}
              </StyledVideoCardTitle>
              <StyledVideoCardThumbnail
                imgSrc={workshop.thumbnailUrl || ''}
                role="img"
              />
              <StyledVideoCardUserDiv>{workshop.tag}</StyledVideoCardUserDiv>
              <StyledVideoCardUserDiv>
                {workshop.location ? workshop.location : 'Google Meet'}
              </StyledVideoCardUserDiv>
              <StyledVideoCardUserDiv>
                {DateService.timestampToDate(workshop.date)}
              </StyledVideoCardUserDiv>
            </StyledSecondaryVideoCard>
          );
        })}
      </Carousel>
    </StyledDiscoverPageContainer>
  );
};

export { DiscoverPage };
