import React, { FC, useEffect, useState } from 'react';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import EventIcon from '@material-ui/icons/Event';

import { AddMentorshipPage } from '../../components/AddContent/AddMentorshipPage';
import { AddPlaylistPage } from '../../components/AddContent/AddPlaylistPage';
import { AddVideoPage } from '../../components/AddContent/AddVideoPage';
import { AddWorkshopPage } from '../../components/AddContent/AddWorkshopPage';
import {
  AddContentPageProps,
  AddContentPageDispatchProps,
} from './AddContentPageContainer';
import {
  StyledAddContentMenuItem,
  StyledAddContentPageContainer,
  StyledAddContentPageDiv,
  StyledAddContentPageSection,
  StyledAddContentPicker,
  StyledAddContentPickerElement,
} from './AddContentPageStyles';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';

export enum PageOptions {
  MENTORSHIP = 'mentorship',
  VIDEO = 'video',
  PLAYLIST = 'playlist',
  WORKSHOP = 'workshop',
}

const AddContentPage: FC<AddContentPageProps & AddContentPageDispatchProps> = (
  props,
) => {
  const {
    videos,
    appUser,
    addMentorship,
    addVideo,
    addPlaylist,
    addWorkshop,
    getVideos,
  } = props;

  useEffect(() => {
    const request = SearchVideosRequest.create({
      uid: appUser.uid,
    });
    getVideos(request);
  }, []);

  const [currentPage, setCurrentPage] = useState<string>(
    PageOptions.MENTORSHIP,
  );

  return (
    <StyledAddContentPageContainer>
      <StyledAddContentPageSection>
        <StyledAddContentMenuItem
          className={`${
            currentPage === PageOptions.MENTORSHIP ? 'active' : ''
          }`}
          onClick={() => setCurrentPage(PageOptions.MENTORSHIP)}
        >
          ADD MENTORSHIP
        </StyledAddContentMenuItem>
        <StyledAddContentMenuItem
          className={`${currentPage === PageOptions.VIDEO ? 'active' : ''}`}
          onClick={() => setCurrentPage(PageOptions.VIDEO)}
        >
          ADD VIDEO
        </StyledAddContentMenuItem>
        <StyledAddContentMenuItem
          className={`${currentPage === PageOptions.PLAYLIST ? 'active' : ''}`}
          onClick={() => setCurrentPage(PageOptions.PLAYLIST)}
        >
          ADD PLAYLIST
        </StyledAddContentMenuItem>
        {appUser.admin && (
          <StyledAddContentMenuItem
            className={`${
              currentPage === PageOptions.WORKSHOP ? 'active' : ''
            }`}
            onClick={() => setCurrentPage(PageOptions.WORKSHOP)}
          >
            ADD WORKSHOP
          </StyledAddContentMenuItem>
        )}
      </StyledAddContentPageSection>
      <StyledAddContentPicker>
        <StyledAddContentPickerElement
          className={currentPage === PageOptions.PLAYLIST ? 'is-selected' : ''}
          onClick={() => setCurrentPage(PageOptions.PLAYLIST)}
        >
          <PlaylistPlayIcon />
        </StyledAddContentPickerElement>
        <StyledAddContentPickerElement
          className={currentPage === PageOptions.VIDEO ? 'is-selected' : ''}
          onClick={() => setCurrentPage(PageOptions.VIDEO)}
        >
          <VideoLibraryIcon />
        </StyledAddContentPickerElement>
        <StyledAddContentPickerElement
          className={
            currentPage === PageOptions.MENTORSHIP ? 'is-selected' : ''
          }
          onClick={() => setCurrentPage(PageOptions.MENTORSHIP)}
        >
          <PeopleOutlineIcon />
        </StyledAddContentPickerElement>
        {appUser.admin && (
          <StyledAddContentPickerElement
            className={
              currentPage === PageOptions.WORKSHOP ? 'is-selected' : ''
            }
            onClick={() => setCurrentPage(PageOptions.WORKSHOP)}
          >
            <EventIcon />
          </StyledAddContentPickerElement>
        )}
      </StyledAddContentPicker>
      <StyledAddContentPageDiv>
        {currentPage === PageOptions.MENTORSHIP && (
          <AddMentorshipPage addMentorship={addMentorship} />
        )}
        {currentPage === PageOptions.VIDEO && (
          <AddVideoPage addVideo={addVideo} />
        )}
        {currentPage === PageOptions.PLAYLIST && (
          <AddPlaylistPage videos={videos} addPlaylist={addPlaylist} />
        )}
        {currentPage === PageOptions.WORKSHOP && appUser.admin && (
          <AddWorkshopPage addWorkshop={addWorkshop} />
        )}
      </StyledAddContentPageDiv>
    </StyledAddContentPageContainer>
  );
};

export { AddContentPage };
