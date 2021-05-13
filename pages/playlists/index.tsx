import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';

import { SearchPlaylistsRequest } from '../../main/domain/SearchPlaylistsRequest';
import { PlaylistsFeedPageContainer } from '../../main/pages/PlaylistsFeedPage/PlaylistsFeedPageContainer';
import { AppState } from '../../main/store/AppState';
import { getPlaylistsThunk } from '../../main/store/playlists/getPlaylistsThunk';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';
import { getUsersThunk } from '../../main/store/users/getUsersThunks';

const PlaylistsNextPage: NextPage = () => {
  const pageTitle = 'Playlists';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PlaylistsFeedPageContainer />
    </div>
  );
};

PlaylistsNextPage.getInitialProps = async ({
  reduxStore,
  query,
}: NextPageContext & { reduxStore: Store<AppState> }) => {
  reduxStore.dispatch(setInitialStateAction());

  const request = SearchPlaylistsRequest.create(query);
  const result = await getPlaylistsThunk(request)(reduxStore.dispatch);

  const result2 = await getUsersThunk()(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  if (!result2.isOk) {
    return { statusCode: result2.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default PlaylistsNextPage;
