import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';

import { SearchPlaylistsRequest } from '../../main/domain/SearchPlaylistsRequest';
import { PlaylistPageContainer } from '../../main/pages/PlaylistPage/PlaylistPageContainer';
import { AppState } from '../../main/store/AppState';
import { getPlaylistsThunk } from '../../main/store/playlists/getPlaylistsThunk';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';

const PlaylistNextPage: NextPage = () => {
  const pageTitle = 'Playlist';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PlaylistPageContainer />
    </div>
  );
};
