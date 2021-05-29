import Link from 'next/link';
import React, { FC } from 'react';
import Carousel from 'react-multi-carousel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Button } from '@material-ui/core';

import { Context } from '../../Context';
import { User } from '../../domain/User';
import { MomentService } from '../../services/MomentService';
import { StyledVideoAuthor } from '../VideoPage/VideoPageStyles';
import {
  DiscoverPageProps,
  DiscoverPageDispatchProps,
} from './DiscoverPageContainer';
import {
  StyledDiscoverPageContainer,
  StyledDiscoverTitle,
  StyledDiscoverContentCard,
  StyledDiscoverContentContainer,
  StyledDiscoverVideoTitle,
  StyledDiscoverVideoUserDiv,
  StyledDiscoverCardThumbnail,
  StyledDiscoverWorkshopDescription,
  StyledDiscoverWorkshopDetails,
  StyledDiscoverWorkshopDetailsDiv,
} from './DiscoverPageStyles';

const DiscoverPage: FC<DiscoverPageProps & DiscoverPageDispatchProps> = (
  props,
) => {
  const {
    videos,
    workshops,
    users,
    appUser,
    getTrendingVideos,
    getWorkshops,
    registerToWorkshop,
  } = props;

  console.log(videos);

  const DateService = new MomentService();

  const displayedUser = (userId: string): string => {
    const foundUser: User | undefined = users.find(
      (item) => item.uid === userId,
    );
    return foundUser ? foundUser.username : '';
  };

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
      <StyledDiscoverContentContainer>
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
              <StyledDiscoverContentCard key={index}>
                <StyledDiscoverWorkshopDescription>
                  {workshop.description}
                </StyledDiscoverWorkshopDescription>
                <StyledDiscoverCardThumbnail
                  imgSrc={workshop.thumbnailUrl || ''}
                  role="img"
                />
                <StyledDiscoverWorkshopDetails className="tag">
                  #{workshop.tag}
                </StyledDiscoverWorkshopDetails>
                <StyledDiscoverWorkshopDetailsDiv>
                  <LocationOnIcon />
                  <StyledDiscoverWorkshopDetails>
                    {workshop.location ? workshop.location : 'Google Meet'}
                  </StyledDiscoverWorkshopDetails>
                </StyledDiscoverWorkshopDetailsDiv>
                <StyledDiscoverWorkshopDetailsDiv>
                  <ScheduleIcon />
                  <StyledDiscoverWorkshopDetails>
                    {DateService.timestampToDate(workshop.date)}
                  </StyledDiscoverWorkshopDetails>
                </StyledDiscoverWorkshopDetailsDiv>
                <Button
                  className={
                    workshop.participants.includes(appUser.email)
                      ? 'unregister-button'
                      : 'register-button'
                  }
                  onClick={() => registerToWorkshop(workshop.id)}
                >
                  {workshop.participants.includes(appUser.email)
                    ? 'Unregister'
                    : 'Register'}
                </Button>
              </StyledDiscoverContentCard>
            );
          })}
        </Carousel>
      </StyledDiscoverContentContainer>
      <StyledDiscoverTitle className="trending-videos">
        Trending videos
      </StyledDiscoverTitle>
      <StyledDiscoverContentContainer>
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
                <StyledDiscoverContentCard key={index}>
                  <StyledDiscoverVideoTitle>
                    {currentVideo.title}
                  </StyledDiscoverVideoTitle>
                  <StyledDiscoverCardThumbnail
                    className="video-thumbnail"
                    imgSrc={currentVideo.thumbnailUrl || ''}
                    role="img"
                  />
                  <StyledDiscoverVideoUserDiv>
                    by
                    <Link
                      href={`${Context.BASE_PATH}/profiles/[id]`}
                      as={`${Context.BASE_PATH}/profiles/${currentVideo.uid}`}
                    >
                      <StyledVideoAuthor>
                        {displayedUser(currentVideo.uid)}
                      </StyledVideoAuthor>
                    </Link>
                  </StyledDiscoverVideoUserDiv>
                </StyledDiscoverContentCard>
              </Link>
            );
          })}
        </Carousel>
      </StyledDiscoverContentContainer>
    </StyledDiscoverPageContainer>
  );
};

export { DiscoverPage };
