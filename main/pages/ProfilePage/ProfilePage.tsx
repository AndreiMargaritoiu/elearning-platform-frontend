import React, { FC, useEffect, useState } from 'react';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

import { ProfileDispatchProps, ProfilePageProps } from './ProfilePageContainer';
import {
  StyledProfileContentPicker,
  StyledProfileDetails,
  StyledProfileImage,
  StyledProfileNumericalElement,
  StyledProfileNumericalStats,
  StyledProfileNumericalStatsText,
  StyledProfilePage,
  StyledProfilePickerElement,
  StyledProfilePickerLabel,
  StyledProfileStats,
  StyledProfileUsername,
} from './ProfilePageStyles';
import { UsersPlaylistsFeed } from '../../components/ProfilePage/Feeds/UsersPlaylistsFeed';
import { UsersVideosFeed } from '../../components/ProfilePage/Feeds/UsersVideoFeed';
import { UsersMentorshipsFeed } from '../../components/ProfilePage/Feeds/UsersMentorshipsFeed';

const ProfilePage: FC<ProfilePageProps & ProfileDispatchProps> = (props) => {
  const {
    appUser,
    playlists,
    videos,
    mentorships,
    getPlaylists,
    deletePlaylist,
    updatePlaylist,
    getVideos,
    deleteVideo,
    updateVideo,
    getMentorships,
    deleteMentorship,
    updateMentorship,
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
    <StyledProfilePage>
      <StyledProfileDetails>
        <StyledProfileImage
          imgSrc={
            'https://firebasestorage.googleapis.com/v0/b/elearning-platform-e75ed.appspot.com/o/users%2F2HL2DsCxtUTnDhAYAftKSEDg6ah2%2F2HL2DsCxtUTnDhAYAftKSEDg6ah2?alt=media&token=ba5c0082-c6d2-4492-807e-98a2283f44ce'
          }
          role="img"
        />
        <StyledProfileStats>
          <StyledProfileUsername>{appUser.username}</StyledProfileUsername>
          <StyledProfileNumericalStats>
            <StyledProfileNumericalElement>
              <StyledProfileUsername>
                {appUser.following.length}
              </StyledProfileUsername>
              <StyledProfileNumericalStatsText>
                Following
              </StyledProfileNumericalStatsText>
            </StyledProfileNumericalElement>
            <StyledProfileNumericalElement>
              <StyledProfileUsername>{playlists.length}</StyledProfileUsername>
              <StyledProfileNumericalStatsText>
                Playlists
              </StyledProfileNumericalStatsText>
            </StyledProfileNumericalElement>
            <StyledProfileNumericalElement>
              <StyledProfileUsername>{videos.length}</StyledProfileUsername>
              <StyledProfileNumericalStatsText>
                Videos
              </StyledProfileNumericalStatsText>
            </StyledProfileNumericalElement>
          </StyledProfileNumericalStats>
        </StyledProfileStats>
      </StyledProfileDetails>
      <StyledProfileContentPicker>
        <StyledProfilePickerElement
          className={isPlaylistPage ? 'is-selected' : ''}
          onClick={() => setPage('Playlists')}
        >
          <PlaylistPlayIcon />
          <StyledProfilePickerLabel>Playlists</StyledProfilePickerLabel>
        </StyledProfilePickerElement>
        <StyledProfilePickerElement
          className={isVideoPage ? 'is-selected' : ''}
          onClick={() => setPage('Videos')}
        >
          <VideoLibraryIcon />
          <StyledProfilePickerLabel>Videos</StyledProfilePickerLabel>
        </StyledProfilePickerElement>
        <StyledProfilePickerElement
          className={isMentoringPage ? 'is-selected' : ''}
          onClick={() => setPage('Mentorships')}
        >
          <PeopleOutlineIcon />
          <StyledProfilePickerLabel>Mentorships</StyledProfilePickerLabel>
        </StyledProfilePickerElement>
      </StyledProfileContentPicker>
      {isPlaylistPage && (
        <UsersPlaylistsFeed
          playlists={playlists}
          deletePlaylist={deletePlaylist}
          updatePlaylist={updatePlaylist}
        />
      )}
      {isVideoPage && (
        <UsersVideosFeed
          videos={videos}
          deleteVideo={deleteVideo}
          updateVideo={updateVideo}
        />
      )}
      {isMentoringPage && (
        <UsersMentorshipsFeed
          mentorships={mentorships}
          deleteMentorship={deleteMentorship}
          updateMentorship={updateMentorship}
        />
      )}
    </StyledProfilePage>
  );
};

export { ProfilePage };
