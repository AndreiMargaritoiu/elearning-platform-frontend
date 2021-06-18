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
import { SearchMentorshipsRequest } from '../../domain/SearchMentorshipsRequest';
import { SearchPlaylistsRequest } from '../../domain/SearchPlaylistsRequest';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { SearchUsersRequest } from '../../domain/SearchUsersRequest';
import { useRouter } from 'next/router';
import { PageOptions } from '../ProfilePage/ProfilePage';
import { Context } from '../../Context';

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
    getUsers,
    getUser,
    updateAppUser,
  } = props;

  const router = useRouter();

  useEffect(() => {
    const userId = (router.query?.id as string) || '';
    (async () => {
      await getUser(userId);
    })().then(() => {
      const getPlaylistsRequest = SearchPlaylistsRequest.create({
        uid: userId,
      });
      getPlaylists(getPlaylistsRequest);
      const getVideosRequest = SearchVideosRequest.create({
        uid: userId,
      });
      getVideos(getVideosRequest);
      const getMentorshipsReq = SearchMentorshipsRequest.create({
        uid: userId,
      });
      getMentorships(getMentorshipsReq);
      const getUsersReq = SearchUsersRequest.create({
        followedBy: userId,
      });
      getUsers(getUsersReq);
    });
    if (router.query.page) {
      setCurrentPage(router.query.page.toString());
    }
  }, []);

  const [currentPage, setCurrentPage] = useState<string>(PageOptions.PLAYLIST);
  const [modalState, setModalState] = useState<FollowingListModalState>({
    isOpen: false,
  });

  const setPage = (page: string) => {
    setCurrentPage(page);
    const newPath: string = `${Context.BASE_PATH}/profiles/${router.query?.id}${
      page === PageOptions.PLAYLIST ? '' : `?page=${page}`
    }`;
    router.push(newPath, newPath, {
      shallow: true,
    });
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
          className={currentPage === PageOptions.PLAYLIST ? 'is-selected' : ''}
          onClick={() => setPage(PageOptions.PLAYLIST)}
        >
          <PlaylistPlayIcon />
          <StyledProfilePickerLabel>Playlists</StyledProfilePickerLabel>
        </StyledProfilePickerElement>
        <StyledProfilePickerElement
          className={currentPage === PageOptions.VIDEOS ? 'is-selected' : ''}
          onClick={() => setPage(PageOptions.VIDEOS)}
        >
          <VideoLibraryIcon />
          <StyledProfilePickerLabel>Videos</StyledProfilePickerLabel>
        </StyledProfilePickerElement>
        <StyledProfilePickerElement
          className={
            currentPage === PageOptions.MENTORSHIPS ? 'is-selected' : ''
          }
          onClick={() => setPage(PageOptions.MENTORSHIPS)}
        >
          <PeopleOutlineIcon />
          <StyledProfilePickerLabel>Mentorships</StyledProfilePickerLabel>
        </StyledProfilePickerElement>
      </StyledProfileContentPicker>
      {currentPage === PageOptions.PLAYLIST && (
        <UsersPlaylistsFeed playlists={playlists} />
      )}
      {currentPage === PageOptions.VIDEOS && (
        <UsersVideosFeed videos={videos} />
      )}
      {currentPage === PageOptions.MENTORSHIPS && (
        <UsersMentorshipsFeed mentorships={mentorships} />
      )}
    </StyledOthersProfilePage>
  );
};

export { OthersProfilePage };
