import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';
import { SearchMentorshipsRequest } from '../../main/domain/SearchMentorshipsRequest';

import { SearchPlaylistsRequest } from '../../main/domain/SearchPlaylistsRequest';
import { SearchVideosRequest } from '../../main/domain/SearchVideosRequest';
import { ProfilePageContainer } from '../../main/pages/ProfilePage/ProfilePageContainer';
import { AppState } from '../../main/store/AppState';
import { getMentorshipsThunk } from '../../main/store/mentoring/getMentorshipsThunk';
import { getPlaylistsThunk } from '../../main/store/playlists/getPlaylistsThunk';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';
import { getVideosThunk } from '../../main/store/videos/getVideosThunk';

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
  const result2 = await getVideosThunk(request2)(reduxStore.dispatch);

  const request3 = SearchMentorshipsRequest.create(query);
  const result3 = await getMentorshipsThunk(request3)(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  if (!result2.isOk) {
    return { statusCode: result2.error };
  }

  if (!result3.isOk) {
    return { statusCode: result3.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default ProfileNextPage;
