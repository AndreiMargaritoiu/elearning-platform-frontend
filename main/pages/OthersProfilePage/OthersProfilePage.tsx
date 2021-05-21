import React, { FC, useEffect, useState } from 'react';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Button } from '@material-ui/core';

import {
  OthersProfileDispatchProps,
  OthersProfilePageProps,
} from './OthersProfilePageContainer';
import {
  StyledOthersProfileDetails,
  StyledOthersProfileNumericalStats,
  StyledOthersProfileNumericalStatsText,
  StyledOthersProfilePage,
  StyledOthersProfileStats,
  StyledOthersProfileUsername,
} from './OthersProfilePageStyles';
import { UsersPlaylistsFeed } from '../../components/ProfilePage/Feeds/UsersPlaylistsFeed';
import { UsersVideosFeed } from '../../components/ProfilePage/Feeds/UsersVideoFeed';
import { UsersMentorshipsFeed } from '../../components/ProfilePage/Feeds/UsersMentorshipsFeed';
import {
  StyledProfileContentPicker,
  StyledProfileImage,
  StyledProfileNumericalElement,
  StyledProfilePickerElement,
  StyledProfilePickerLabel,
} from '../ProfilePage/ProfilePageStyles';
import Media from 'react-media';
import { UpdateUserRequest } from '../../domain/User';
import {
  FollowingListModal,
  FollowingListModalState,
} from '../../components/ProfilePage/FollowingList/FollowingListModal';

const OthersProfilePage: FC<
  OthersProfilePageProps & OthersProfileDispatchProps
> = (props) => {
  const {
    appUser,
    user,
    users,
    playlists,
    videos,
    mentorships,
    getPlaylists,
    getVideos,
    getMentorships,
    updateAppUser,
  } = props;

  const [isPlaylistPage, setPlaylistPage] = useState<boolean>(true);
  const [isVideoPage, setVideoPage] = useState<boolean>(false);
  const [isMentoringPage, setMentoringPage] = useState<boolean>(false);
  const [modalState, setModalState] = useState<FollowingListModalState>({
    isOpen: false,
  });

  // useEffect(() => {
  //   const getPlaylistsRequest: GetPlaylistsRequest = {};
  //   getPlaylists(getPlaylistsRequest);
  //   const getVideosRequest: GetPlaylistsRequest = {};
  //   getVideos(getVideosRequest);
  // });

  console.log('>>>>>', users);

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

  const handleFollowButton = () => {
    const followedIds: string[] = appUser.following.includes(user.uid)
      ? appUser.following.filter((item) => item !== user.uid)
      : [...appUser.following, user.uid];
    const updateAppUserReqest: UpdateUserRequest = {
      following: followedIds,
    };
    updateAppUser(appUser.uid, updateAppUserReqest);
  };

  return (
    <StyledOthersProfilePage>
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
      <StyledOthersProfileDetails>
        <StyledProfileImage imgSrc={user.photoUrl || ''} role="img" />
        <StyledOthersProfileStats>
          <StyledOthersProfileUsername>
            {user.username}
          </StyledOthersProfileUsername>
          <StyledOthersProfileNumericalStats>
            <StyledProfileNumericalElement
              className="following-list"
              onClick={() => setModalState({ isOpen: true })}
            >
              <StyledOthersProfileUsername>
                {user.following.length}
              </StyledOthersProfileUsername>
              <StyledOthersProfileNumericalStatsText>
                Following
              </StyledOthersProfileNumericalStatsText>
            </StyledProfileNumericalElement>
            <StyledProfileNumericalElement>
              <StyledOthersProfileUsername>
                {playlists.length}
              </StyledOthersProfileUsername>
              <StyledOthersProfileNumericalStatsText>
                Playlists
              </StyledOthersProfileNumericalStatsText>
            </StyledProfileNumericalElement>
            <StyledProfileNumericalElement>
              <StyledOthersProfileUsername>
                {videos.length}
              </StyledOthersProfileUsername>
              <StyledOthersProfileNumericalStatsText>
                Videos
              </StyledOthersProfileNumericalStatsText>
            </StyledProfileNumericalElement>
          </StyledOthersProfileNumericalStats>
          <Media
            queries={{
              mobile: `(max-width: 767px)`,
              tablet: `(min-width: 768px)`,
            }}
          >
            {(matches) =>
              matches.mobile &&
              !matches.tablet &&
              appUser.uid !== user.uid && (
                <Button className="follow-button" onClick={handleFollowButton}>
                  {appUser.following.includes(user.uid) ? 'UNFOLLOW' : 'FOLLOW'}
                </Button>
              )
            }
          </Media>
        </StyledOthersProfileStats>
        <Media
          queries={{
            mobile: `(max-width: 767px)`,
            tablet: `(min-width: 768px)`,
          }}
        >
          {(matches) =>
            !matches.mobile &&
            matches.tablet &&
            appUser.uid !== user.uid && (
              <Button className="follow-button" onClick={handleFollowButton}>
                {appUser.following.includes(user.uid) ? 'UNFOLLOW' : 'FOLLOW'}
              </Button>
            )
          }
        </Media>
      </StyledOthersProfileDetails>
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
      {isPlaylistPage && <UsersPlaylistsFeed playlists={playlists} />}
      {isVideoPage && <UsersVideosFeed videos={videos} />}
      {isMentoringPage && <UsersMentorshipsFeed mentorships={mentorships} />}
    </StyledOthersProfilePage>
  );
};

export { OthersProfilePage };
