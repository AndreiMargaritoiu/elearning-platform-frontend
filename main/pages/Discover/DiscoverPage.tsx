import Link from 'next/link';
import React, { FC } from 'react';
import Carousel from 'react-multi-carousel';

import { Context } from '../../Context';
import { MomentService } from '../../services/MomentService';
import {
  StyledVideoCardDescription,
  StyledVideoCardThumbnail,
  StyledVideoCardTitle,
} from '../Dashboard/DashboardPageStyles';
import {
  StyledSecondaryVideoCard,
  StyledSecondaryVideosContainer,
  StyledVideoAuthor,
} from '../VideoPage/VideoPageStyles';

import {
  DiscoverPageProps,
  DiscoverPageDispatchProps,
} from './DiscoverPageContainer';
import {
  StyledDiscoverPageContainer,
  StyledDiscoverTitle,
} from './DiscoverPageStyles';

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
      <StyledDiscoverTitle>Workshops</StyledDiscoverTitle>
      <StyledSecondaryVideosContainer>
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
              <StyledSecondaryVideoCard key={index}>
                <StyledVideoCardTitle>
                  {workshop.description}
                </StyledVideoCardTitle>
                <StyledVideoCardThumbnail
                  imgSrc={workshop.thumbnailUrl || ''}
                  role="img"
                />
                <div>{workshop.tag}</div>
                <div>
                  {workshop.location ? workshop.location : 'Google Meet'}
                </div>
                <div>{DateService.timestampToDate(workshop.date)}</div>
              </StyledSecondaryVideoCard>
            );
          })}
        </Carousel>
      </StyledSecondaryVideosContainer>
      <StyledDiscoverTitle className="trending-videos">
        Trending videos
      </StyledDiscoverTitle>
      <StyledSecondaryVideosContainer>
        {/* {videos
          .filter((position: Video) => position.id !== video.id)
          .slice(0, 5)
          .map((currentVideo: Video) => (
            <Link
              href={`${Context.BASE_PATH}/videos/[id]`}
              as={`${Context.BASE_PATH}/videos/${currentVideo.id}`}
            >
              <StyledSecondaryVideoCard>
                <StyledVideoCardTitle>
                  {currentVideo.title}
                </StyledVideoCardTitle>
                <StyledVideoCardThumbnail
                  imgSrc={currentVideo.thumbnailUrl || ''}
                  role="img"
                />
                <StyledVideoCardUserDiv>
                  by {currentVideo.uid}
                </StyledVideoCardUserDiv>
              </StyledSecondaryVideoCard>
            </Link>
          ))} */}
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
          {videos.map((currentVideo, index) => {
            return (
              <Link
                href={`${Context.BASE_PATH}/videos/[id]`}
                as={`${Context.BASE_PATH}/videos/${currentVideo.id}`}
              >
                <StyledSecondaryVideoCard key={index}>
                  <StyledVideoCardTitle>
                    {currentVideo.title}
                  </StyledVideoCardTitle>
                  <StyledVideoCardThumbnail
                    imgSrc={currentVideo.thumbnailUrl || ''}
                    role="img"
                  />
                  <StyledVideoCardDescription className="bottom-navigation">
                    by
                    <Link
                      href={`${Context.BASE_PATH}/profiles/[id]`}
                      as={`${Context.BASE_PATH}/profiles/${currentVideo.uid}`}
                    >
                      <StyledVideoAuthor>{currentVideo.uid}</StyledVideoAuthor>
                    </Link>
                  </StyledVideoCardDescription>
                </StyledSecondaryVideoCard>
              </Link>
            );
          })}
        </Carousel>
      </StyledSecondaryVideosContainer>
    </StyledDiscoverPageContainer>
  );
};

export { DiscoverPage };
