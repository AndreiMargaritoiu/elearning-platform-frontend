import React, { FC, useState } from 'react';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import ResizeObserver from 'rc-resize-observer';

import {
  PlaylistDispatchProps,
  PlaylistPageProps,
} from './PlaylistPageContainer';
import { StyledPlaylistName, StyledPlaylistPage } from './PlaylistPageStyles';
import { Video } from '../../domain/Video';
import {
  StyledMainVideoCard,
  StyledNextEpisodeDetails,
  StyledNextEpisodeImageWrapper,
  StyledNextEpisodeTitle,
  StyledNextImageContainer,
  StyledNextVideoCard,
  StyledNextVideosContainer,
  StyledVideoAuthor,
  StyledVideoUserDiv,
  StyledWatchNextLabel,
} from '../VideoPage/VideoPageStyles';
import {
  StyledVideoCardDescription,
  StyledVideoCardTitle,
} from '../Dashboard/DashboardPageStyles';
import { TrackItemRequest } from '../../domain/Tracking';
import Link from 'next/link';
import { Context } from '../../Context';

const PlaylistPage: FC<PlaylistPageProps & PlaylistDispatchProps> = (props) => {
  const {
    appUser,
    playlist,
    videos,
    trackings,
    getVideos,
    saveTrackedItem,
    getTrackedItems,
  } = props;

  const [currentVideoId, setCurrentVideoId] = useState<string>(
    playlist.videoRefs[0],
  );
  const [videoPlayerHeight, setVideoPlayerHeight] = useState<number>(0);
  const videoPlayerRef = React.createRef<HTMLDivElement>();

  const currentVideo: Video | undefined = videos.find(
    (it: Video) => it.id === currentVideoId,
  );

  const handleTrackPlayVideo = () => {
    if (currentVideo) {
      if (
        trackings.find(
          (item) => item.vid === currentVideo.id || item.uid === appUser.uid,
        )
      ) {
        return;
      }
      const trackItemRequest: TrackItemRequest = {
        uid: appUser.uid,
        vid: currentVideo.id,
      };
      saveTrackedItem(trackItemRequest);
    }
  };

  return (
    <StyledPlaylistPage>
      <StyledPlaylistName>{playlist.title}</StyledPlaylistName>
      {currentVideo && (
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <StyledMainVideoCard>
              <StyledVideoCardTitle>{currentVideo.title}</StyledVideoCardTitle>
              <ResizeObserver
                onResize={() => {
                  setVideoPlayerHeight(
                    videoPlayerRef.current?.clientHeight || 0,
                  );
                }}
              >
                <div className="player-wrapper" ref={videoPlayerRef}>
                  <ReactPlayer
                    url={currentVideo.videoUrl}
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
                  as={`${Context.BASE_PATH}/profiles/${currentVideo.uid}`}
                >
                  <StyledVideoAuthor>caca</StyledVideoAuthor>
                </Link>
              </StyledVideoUserDiv>
              <StyledVideoCardDescription>
                {currentVideo.description}
              </StyledVideoCardDescription>
            </StyledMainVideoCard>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <StyledWatchNextLabel>Next episodes</StyledWatchNextLabel>
            <StyledNextVideosContainer height={videoPlayerHeight}>
              {videos
                .filter((item) => item.id !== currentVideo.id)
                .map((item) => (
                  <StyledNextVideoCard
                    onClick={() => setCurrentVideoId(item.id)}
                  >
                    <StyledNextImageContainer>
                      <StyledNextEpisodeImageWrapper
                        imgSrc={item.thumbnailUrl}
                      />
                    </StyledNextImageContainer>
                    <StyledNextEpisodeDetails>
                      <StyledNextEpisodeTitle>
                        {item.title}
                      </StyledNextEpisodeTitle>
                    </StyledNextEpisodeDetails>
                  </StyledNextVideoCard>
                ))}
            </StyledNextVideosContainer>
          </Grid>
        </Grid>
      )}
    </StyledPlaylistPage>
  );
};

export { PlaylistPage };
