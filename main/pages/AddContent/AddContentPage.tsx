import React, { FC, useState } from 'react';
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
  StyledAddContentPageMenu,
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
  } = props;

  const [currentPage, setCurrentPage] = useState<string>(
    PageOptions.MENTORSHIP,
  );

  return (
    <StyledAddContentPageContainer>
      <StyledAddContentPageMenu>
        <StyledAddContentMenuItem
          onClick={() => setCurrentPage(PageOptions.MENTORSHIP)}
        >
          ADD MENTORSHIP
        </StyledAddContentMenuItem>
        <StyledAddContentMenuItem
          onClick={() => setCurrentPage(PageOptions.VIDEO)}
        >
          ADD VIDEO
        </StyledAddContentMenuItem>
        <StyledAddContentMenuItem
          onClick={() => setCurrentPage(PageOptions.PLAYLIST)}
        >
          ADD PLAYLIST
        </StyledAddContentMenuItem>
        <StyledAddContentMenuItem
          onClick={() => setCurrentPage(PageOptions.WORKSHOP)}
        >
          ADD WORKSHOP
        </StyledAddContentMenuItem>
      </StyledAddContentPageMenu>
      <StyledAddContentPageMenu>
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
      </StyledAddContentPageMenu>
    </StyledAddContentPageContainer>
  );
};

export { AddContentPage };
