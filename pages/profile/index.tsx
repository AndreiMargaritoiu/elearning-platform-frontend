import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';

import { SearchPlaylistsRequest } from '../../main/domain/SearchPlaylistsRequest';
import { SearchVideosRequest } from '../../main/domain/SearchVideosRequest';
import { ProfilePageContainer } from '../../main/pages/ProfilePage/ProfilePageContainer';
import { AppState } from '../../main/store/AppState';
import { getPlaylistsThunk } from '../../main/store/playlists/getPlaylistsThunk';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';

const ProfileNextPage: NextPage = () => {
  const pageTitle = 'Profile';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ProfilePageContainer />
    </div>
  );
};

ProfileNextPage.getInitialProps = async ({
  reduxStore,
  query,
}: NextPageContext & { reduxStore: Store<AppState> }) => {
  reduxStore.dispatch(setInitialStateAction());

  const request = SearchPlaylistsRequest.create(query);
  const result = await getPlaylistsThunk(request)(reduxStore.dispatch);

  const request2 = SearchVideosRequest.create(query);
  const result2 = await getPlaylistsThunk(request2)(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  if (!result2.isOk) {
    return { statusCode: result2.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default ProfileNextPage;
