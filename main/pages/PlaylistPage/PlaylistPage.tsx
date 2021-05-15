import React, { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Carousel from 'react-multi-carousel';

import {
  StyledVideoCardThumbnail,
  StyledVideoCardTitle,
} from '../Dashboard/DashboardPageStyles';
import {
  StyledPlaylistCardDescription,
  StyledPlaylistCardThumbnail,
  StyledPlaylistCardTitle,
} from '../PlaylistsFeedPage/PlaylistsFeedPageStyles';
import { StyledSecondaryVideoCard } from '../VideoPage/VideoPageStyles';
import {
  PlaylistDispatchProps,
  PlaylistPageProps,
} from './PlaylistPageContainer';
import {
  StyledMainPlaylistCard,
  StyledPlaylistPage,
  StyledSecondaryPlaylistsContainer,
} from './PlaylistPageStyles';
import { Video } from '../../domain/Video';

const PlaylistPage: FC<PlaylistPageProps & PlaylistDispatchProps> = (props) => {
  const { playlist, videos } = props;

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

  const [currentVideoId, setCurrentVideoId] = useState<string>(
    playlist.videoRefs[0],
  );

  const currentVideo: Video | undefined = videos.find(
    (it: Video) => it.id === currentVideoId,
  );
  const currentVideoUrl: string = currentVideo ? currentVideo.videoUrl : '';

  return (
    <StyledPlaylistPage>
      <StyledMainPlaylistCard>
        <StyledPlaylistCardTitle>{playlist.title}</StyledPlaylistCardTitle>
        <StyledPlaylistCardDescription>
          by {playlist.uid}
        </StyledPlaylistCardDescription>
        <ReactPlayer url={currentVideoUrl} controls={true} />
        <StyledPlaylistCardDescription>
          {playlist.description}
        </StyledPlaylistCardDescription>
      </StyledMainPlaylistCard>
      <StyledSecondaryPlaylistsContainer>
        {/* {videos
          .filter((position: Playlist) => position.id !== video.id)
          .slice(0, 5)
          .map((currentPlaylist: Playlist) => (
            <Link
              href={`${Context.BASE_PATH}/videos/[id]`}
              as={`${Context.BASE_PATH}/videos/${currentPlaylist.id}`}
            >
              <StyledSecondaryPlaylistCard>
                <StyledPlaylistCardTitle>
                  {currentPlaylist.title}
                </StyledPlaylistCardTitle>
                <StyledPlaylistCardThumbnail
                  imgSrc={currentPlaylist.thumbnailUrl || ''}
                  role="img"
                />
                <StyledPlaylistCardUserDiv>
                  by {currentPlaylist.uid}
                </StyledPlaylistCardUserDiv>
              </StyledSecondaryPlaylistCard>
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
          {videos
            .filter((video: Video) => video.id !== currentVideoId)
            .map((video, index) => {
              return (
                <StyledSecondaryVideoCard
                  key={index}
                  onClick={() => setCurrentVideoId(video.id)}
                >
                  <StyledVideoCardTitle>{video.title}</StyledVideoCardTitle>
                  <StyledVideoCardThumbnail
                    imgSrc={video.thumbnailUrl || ''}
                    role="img"
                  />
                  <label>by {video.uid}</label>
                </StyledSecondaryVideoCard>
              );
            })}
        </Carousel>
      </StyledSecondaryPlaylistsContainer>
    </StyledPlaylistPage>
  );
};

export { PlaylistPage };
