import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
import { SearchPlaylistsRequest } from '../../domain/SearchPlaylistsRequest';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { SearchMentorshipsRequest } from '../../domain/SearchMentorshipsRequest';
import { SearchUsersRequest } from '../../domain/SearchUsersRequest';
import { Context } from '../../Context';

export enum PageOptions {
  PLAYLIST = 'playlist',
  VIDEOS = 'video',
  MENTORSHIPS = 'mentorships',
}

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
    getUsers,
  } = props;

  const [currentPage, setCurrentPage] = useState<string>(PageOptions.PLAYLIST);
  const [modalState, setModalState] = useState<FollowingListModalState>({
    isOpen: false,
  });
  const router = useRouter();

  useEffect(() => {
    const userId: string = appUser.uid
      ? appUser.uid
      : Context.cookieService.getCookie('uid');
    if (router.query.page) {
      setCurrentPage(router.query.page.toString());
    }
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
  }, []);

  const setPage = (page: string) => {
    setCurrentPage(page);
    const newPath: string = `${Context.BASE_PATH}/me${
      page === PageOptions.PLAYLIST ? '' : `?page=${page}`
    }`;
    router.push(newPath, newPath, {
      shallow: true,
    });
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
        <PersonalPlaylistsFeed
          playlists={playlists}
          videos={videos}
          deletePlaylist={deletePlaylist}
          updatePlaylist={updatePlaylist}
        />
      )}
      {currentPage === PageOptions.VIDEOS && (
        <PersonalVideosFeed
          videos={videos}
          deleteVideo={deleteVideo}
          updateVideo={updateVideo}
        />
      )}
      {currentPage === PageOptions.MENTORSHIPS && (
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
