import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import ResizeObserver from 'rc-resize-observer';

import {
  StyledVideoCardTitle,
  StyledVideoCardDescription,
} from '../Dashboard/DashboardPageStyles';
import { VideoPageDispatchProps, VideoPageProps } from './VideoPageContainer';
import {
  StyledMainVideoCard,
  StyledNextEpisodeDetails,
  StyledNextEpisodeImageWrapper,
  StyledNextEpisodeTitle,
  StyledNextImageContainer,
  StyledNextVideoCard,
  StyledNextVideosContainer,
  StyledVideoAuthor,
  StyledVideoPage,
  StyledVideoUserDiv,
  StyledWatchNextLabel,
} from './VideoPageStyles';
import { Context } from '../../Context';
import { User } from '../../domain/User';
import { TrackItemRequest } from '../../domain/Tracking';

const VideoPage: FC<VideoPageProps & VideoPageDispatchProps> = (props) => {
  const {
    appUser,
    video,
    videos,
    users,
    trackings,
    saveTrackedItem,
    getTrackedItems,
  } = props;

  const [videoPlayerHeight, setVideoPlayerHeight] = useState<number>(0);
  const videoPlayerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    setVideoPlayerHeight(videoPlayerRef.current?.clientHeight || 0);
    // getTrackedItems(appUser.uid);
  }, []);

  const displayedUser = (userId: string): string => {
    const foundUser: User | undefined = users.find(
      (item) => item.uid === userId,
    );
    return foundUser ? foundUser.username : '';
  };

  const handleTrackPlayVideo = () => {
    if (
      trackings.find(
        (item) => item.vid === video.id || item.uid === appUser.uid,
      )
    ) {
      return;
    }
    const trackItemRequest: TrackItemRequest = {
      uid: appUser.uid,
      vid: video.id,
    };
    saveTrackedItem(trackItemRequest);
  };

  return (
    <StyledVideoPage>
      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <StyledMainVideoCard>
            <StyledVideoCardTitle>{video.title}</StyledVideoCardTitle>
            <ResizeObserver
              onResize={() => {
                setVideoPlayerHeight(videoPlayerRef.current?.clientHeight || 0);
              }}
            >
              <div className="player-wrapper" ref={videoPlayerRef}>
                <ReactPlayer
                  url={video.videoUrl}
                  controls={true}
                  width="100%"
                  height="100%"
                  className="react-player"
                  onPlay={handleTrackPlayVideo}
                />
              </div>
            </ResizeObserver>
            <StyledVideoUserDiv>
              by
              <Link
                href={`${Context.BASE_PATH}/profiles/[id]`}
                as={`${Context.BASE_PATH}/profiles/${video.uid}`}
              >
                <StyledVideoAuthor>
                  {displayedUser(video.uid)}
                </StyledVideoAuthor>
              </Link>
            </StyledVideoUserDiv>
            <StyledVideoCardDescription>
              {video.description}
            </StyledVideoCardDescription>
          </StyledMainVideoCard>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <StyledWatchNextLabel>Watch Next</StyledWatchNextLabel>
          <StyledNextVideosContainer height={videoPlayerHeight}>
            {videos.map((item) => (
              <Link
                href={`${Context.BASE_PATH}/videos/[id]`}
                as={`${Context.BASE_PATH}/videos/${item.id}`}
                passHref
              >
                <StyledNextVideoCard>
                  <StyledNextImageContainer>
                    <StyledNextEpisodeImageWrapper imgSrc={item.thumbnailUrl} />
                  </StyledNextImageContainer>
                  <StyledNextEpisodeDetails>
                    <StyledNextEpisodeTitle>
                      {item.title}
                    </StyledNextEpisodeTitle>
                    <StyledVideoUserDiv>
                      by
                      <Link
                        href={`${Context.BASE_PATH}/profiles/[id]`}
                        as={`${Context.BASE_PATH}/profiles/${video.uid}`}
                      >
                        <StyledVideoAuthor>
                          {displayedUser(video.uid)}
                        </StyledVideoAuthor>
                      </Link>
                    </StyledVideoUserDiv>
                  </StyledNextEpisodeDetails>
                </StyledNextVideoCard>
              </Link>
            ))}
          </StyledNextVideosContainer>
        </Grid>
      </Grid>
    </StyledVideoPage>
  );
};

export { VideoPage };
