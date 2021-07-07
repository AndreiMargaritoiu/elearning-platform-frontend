import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
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
  StyledEventFullLabel,
} from './DiscoverPageStyles';
import { Workshop } from '../../domain/Workshop';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { SearchUsersRequest } from '../../domain/SearchUsersRequest';

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
    getUsers,
  } = props;

  const DateService = new MomentService();
  const router = useRouter();

  useEffect(() => {
    const getVideosReq = SearchVideosRequest.create({
      trending: true,
    });
    getTrendingVideos(getVideosReq);
    const getUsersRequest = SearchUsersRequest.create();
    getUsers(getUsersRequest);
    getWorkshops();
  }, []);

  const displayedUser = (userId: string): string => {
    const foundUser: User | undefined = users.find(
      (item) => item.uid === userId,
    );
    return foundUser ? foundUser.username : '';
  };

  const isEventAvailable = (workshop: Workshop): boolean => {
    if (workshop.capacity) {
      return (
        workshop.participants.length < workshop.capacity ||
        workshop.participants.includes(appUser.email)
      );
    }
    return true;
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
              <StyledDiscoverContentCard
                key={`discover-card-workshop-${index}`}
              >
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
                {isEventAvailable(workshop) ? (
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
                ) : (
                  <StyledEventFullLabel>The event is full</StyledEventFullLabel>
                )}
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
                key={`discover-card-video-${index}`}
                href={`${Context.BASE_PATH}/videos/[id]?fromTrending=true`}
                as={`${Context.BASE_PATH}/videos/${currentVideo.id}?fromTrending=true`}
              >
                <StyledDiscoverContentCard>
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
