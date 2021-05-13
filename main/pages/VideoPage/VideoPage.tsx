import Link from 'next/link';
import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import Carousel from 'react-multi-carousel';

import {
  StyledVideoCardThumbnail,
  StyledVideoCardTitle,
  StyledVideoCardDescription,
} from '../Dashboard/DashboardPageStyles';
import { VideoPageProps } from './VideoPageContainer';
import {
  StyledMainVideoCard,
  StyledSecondaryVideoCard,
  StyledSecondaryVideosContainer,
  StyledVideoAuthor,
  StyledVideoPage,
} from './VideoPageStyles';
import { Context } from '../../Context';
import { Video } from '../../domain/Video';

const VideoPage: FC<VideoPageProps> = (props) => {
  const { video, videos } = props;

  console.log(video);
  console.log(videos);

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
    <StyledVideoPage>
      <StyledMainVideoCard>
        <StyledVideoCardTitle>{video.title}</StyledVideoCardTitle>
        <ReactPlayer url={video.videoUrl} controls={true} />
        <StyledVideoCardDescription>
          by
          <Link
            href={`${Context.BASE_PATH}/profiles/[id]`}
            as={`${Context.BASE_PATH}/profiles/${video.uid}`}
          >
            <StyledVideoAuthor>{video.uid}</StyledVideoAuthor>
          </Link>
        </StyledVideoCardDescription>
        <StyledVideoCardDescription>
          {video.description}
        </StyledVideoCardDescription>
      </StyledMainVideoCard>
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
    </StyledVideoPage>
  );
};

export { VideoPage };
