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
import { UsersMentorshipsFeed } from '../../components/ProfilePage/Feeds/UsersMentorshipsFeed';
import { PersonalVideosFeed } from '../../components/ProfilePage/Feeds/PersonalVideosFeed';
import { PersonalPlaylistsFeed } from '../../components/ProfilePage/Feeds/PersonalPlaylistsFeed';
import {
  FollowingListModal,
  FollowingListModalState,
} from '../../components/ProfilePage/FollowingList/FollowingListModal';

const ProfilePage: FC<ProfilePageProps & ProfileDispatchProps> = (props) => {
  const {
    appUser,
    users,
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
    updateAppUser,
  } = props;

  const [isPlaylistPage, setPlaylistPage] = useState<boolean>(true);
  const [isVideoPage, setVideoPage] = useState<boolean>(false);
  const [isMentoringPage, setMentoringPage] = useState<boolean>(false);
  const [modalState, setModalState] = useState<FollowingListModalState>({
    isOpen: false,
  });

  console.log('>>', users);

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

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
      <>
        {modalState.isOpen && updateAppUser && (
          <FollowingListModal
            modalState={modalState}
            appUser={appUser}
            followingList={users}
            setModalState={setModalState}
            updateAppUser={updateAppUser}
          />
        )}
      </>
      <StyledProfileDetails>
        <StyledProfileImage imgSrc={appUser.photoUrl || ''} role="img" />
        <StyledProfileStats>
          <StyledProfileUsername>{appUser.username}</StyledProfileUsername>
          <StyledProfileNumericalStats>
            <StyledProfileNumericalElement
              className="following-list"
              onClick={() => setModalState({ isOpen: true })}
            >
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
        <PersonalPlaylistsFeed
          playlists={playlists}
          videos={videos}
          deletePlaylist={deletePlaylist}
          updatePlaylist={updatePlaylist}
        />
      )}
      {isVideoPage && (
        <PersonalVideosFeed
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
