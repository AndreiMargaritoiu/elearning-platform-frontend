import React, { FC, useEffect, useState } from 'react';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

import {
  OthersProfileDispatchProps,
  OthersProfilePageProps,
} from './OthersProfilePageContainer';
import {
  StyledOthersProfileContentPicker,
  StyledOthersProfileDetails,
  StyledOthersProfileImage,
  StyledOthersProfileNumericalElement,
  StyledOthersProfileNumericalStats,
  StyledOthersProfileNumericalStatsText,
  StyledOthersProfilePage,
  StyledOthersProfilePickerElement,
  StyledOthersProfilePickerLabel,
  StyledOthersProfileStats,
  StyledOthersProfileUsername,
} from './OthersProfilePageStyles';
import { UsersPlaylistsFeed } from '../../components/ProfilePage/Feeds/UsersPlaylistsFeed';
import { UsersVideosFeed } from '../../components/ProfilePage/Feeds/UsersVideoFeed';
import { UsersMentorshipsFeed } from '../../components/ProfilePage/Feeds/UsersMentorshipsFeed';
import { Button } from '@material-ui/core';

const OthersProfilePage: FC<
  OthersProfilePageProps & OthersProfileDispatchProps
> = (props) => {
  const {
    appUser,
    user,
    playlists,
    videos,
    mentorships,
    getPlaylists,
    getVideos,
    getMentorships,
  } = props;

  const [isPlaylistPage, setPlaylistPage] = useState<boolean>(true);
  const [isVideoPage, setVideoPage] = useState<boolean>(false);
  const [isMentoringPage, setMentoringPage] = useState<boolean>(false);

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

  console.log(playlists);
  console.log(videos);

  const setPage = (page?: string) => {
    switch (page) {
      case 'Playlists':
        setPlaylistPage(true);
        setVideoPage(false);
        setMentoringPage(false);
        break;
      case 'Videos':
        setPlaylistPage(false);
        setVideoPage(true);
        setMentoringPage(false);
        break;
      case 'Mentorships':
        setPlaylistPage(false);
        setVideoPage(false);
        setMentoringPage(true);
        break;
    }
  };

  return (
    <StyledOthersProfilePage>
      <StyledOthersProfileDetails>
        <StyledOthersProfileImage
          imgSrc={
            'https://firebasestorage.googleapis.com/v0/b/elearning-platform-e75ed.appspot.com/o/users%2F2HL2DsCxtUTnDhAYAftKSEDg6ah2%2F2HL2DsCxtUTnDhAYAftKSEDg6ah2?alt=media&token=ba5c0082-c6d2-4492-807e-98a2283f44ce'
          }
          role="img"
        />
        <StyledOthersProfileStats>
          <StyledOthersProfileUsername>
            {user.username}
          </StyledOthersProfileUsername>
          <StyledOthersProfileNumericalStats>
            <StyledOthersProfileNumericalElement>
              <StyledOthersProfileUsername>
                {user.following.length}
              </StyledOthersProfileUsername>
              <StyledOthersProfileNumericalStatsText>
                Following
              </StyledOthersProfileNumericalStatsText>
            </StyledOthersProfileNumericalElement>
            <StyledOthersProfileNumericalElement>
              <StyledOthersProfileUsername>
                {playlists.length}
              </StyledOthersProfileUsername>
              <StyledOthersProfileNumericalStatsText>
                Playlists
              </StyledOthersProfileNumericalStatsText>
            </StyledOthersProfileNumericalElement>
            <StyledOthersProfileNumericalElement>
              <StyledOthersProfileUsername>
                {videos.length}
              </StyledOthersProfileUsername>
              <StyledOthersProfileNumericalStatsText>
                Videos
              </StyledOthersProfileNumericalStatsText>
            </StyledOthersProfileNumericalElement>
          </StyledOthersProfileNumericalStats>
        </StyledOthersProfileStats>
        <Button className="secondary" onClick={() => console.log('hello')}>
          {appUser.following.includes(user.uid) ? 'UNFOLLOW' : 'FOLLOW'}
        </Button>
      </StyledOthersProfileDetails>
      <StyledOthersProfileContentPicker>
        <StyledOthersProfilePickerElement
          className={isPlaylistPage ? 'is-selected' : ''}
          onClick={() => setPage('Playlists')}
        >
          <PlaylistPlayIcon />
          <StyledOthersProfilePickerLabel>
            Playlists
          </StyledOthersProfilePickerLabel>
        </StyledOthersProfilePickerElement>
        <StyledOthersProfilePickerElement
          className={isVideoPage ? 'is-selected' : ''}
          onClick={() => setPage('Videos')}
        >
          <VideoLibraryIcon />
          <StyledOthersProfilePickerLabel>
            Videos
          </StyledOthersProfilePickerLabel>
        </StyledOthersProfilePickerElement>
        <StyledOthersProfilePickerElement
          className={isMentoringPage ? 'is-selected' : ''}
          onClick={() => setPage('Mentorships')}
        >
          <PeopleOutlineIcon />
          <StyledOthersProfilePickerLabel>
            Mentorships
          </StyledOthersProfilePickerLabel>
        </StyledOthersProfilePickerElement>
      </StyledOthersProfileContentPicker>
      {isPlaylistPage && <UsersPlaylistsFeed playlists={playlists} />}
      {isVideoPage && <UsersVideosFeed videos={videos} />}
      {isMentoringPage && <UsersMentorshipsFeed mentorships={mentorships} />}
    </StyledOthersProfilePage>
  );
};

export { OthersProfilePage };
