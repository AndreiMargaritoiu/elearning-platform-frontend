import React, { FC, useEffect, useState } from 'react';

import { AddMentorshipPage } from '../../components/AddContent/AddMentorshipPage';
import { AddPlaylistPage } from '../../components/AddContent/AddPlaylistPage';
import { AddVideoPage } from '../../components/AddContent/AddVideoPage';
import { AddWorkshopPage } from '../../components/AddContent/AddWorkshopPage';
import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import {
  AddContentPageProps,
  AddContentPageDispatchProps,
} from './AddContentPageContainer';
import {
  StyledAddContentMenuItem,
  StyledAddContentPageContainer,
  StyledAddContentPageSection,
} from './AddContentPageStyles';

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

  // useEffect(() => {
  //   const request = SearchVideosRequest.create({
  //     uid: appUser.uid,
  //   });
  //   getVideos(request);
  // });

  const [currentPage, setCurrentPage] = useState<string>(
    PageOptions.MENTORSHIP,
  );

  return (
    <StyledAddContentPageContainer>
      <StyledAddContentPageSection className="add-menu">
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
        <StyledAddContentMenuItem
          className={`${currentPage === PageOptions.WORKSHOP ? 'active' : ''}`}
          onClick={() => setCurrentPage(PageOptions.WORKSHOP)}
        >
          ADD WORKSHOP
        </StyledAddContentMenuItem>
      </StyledAddContentPageSection>
      <StyledAddContentPageSection>
        {currentPage === PageOptions.MENTORSHIP && (
          <AddMentorshipPage appUser={appUser} addMentorship={addMentorship} />
        )}
        {currentPage === PageOptions.VIDEO && (
          <AddVideoPage appUser={appUser} addVideo={addVideo} />
        )}
        {currentPage === PageOptions.PLAYLIST && (
          <AddPlaylistPage
            appUser={appUser}
            videos={videos}
            addPlaylist={addPlaylist}
          />
        )}
        {currentPage === PageOptions.WORKSHOP && (
          <AddWorkshopPage appUser={appUser} addWorkshop={addWorkshop} />
        )}
      </StyledAddContentPageSection>
    </StyledAddContentPageContainer>
  );
};

export { AddContentPage };
