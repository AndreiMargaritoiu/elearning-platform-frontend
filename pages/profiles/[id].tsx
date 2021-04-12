import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';
import { SearchMentorshipsRequest } from '../../main/domain/SearchMentorshipsRequest';

import { SearchPlaylistsRequest } from '../../main/domain/SearchPlaylistsRequest';
import { SearchVideosRequest } from '../../main/domain/SearchVideosRequest';
import { OthersProfilePageContainer } from '../../main/pages/OthersProfilePage/OthersProfilePageContainer';
import { AppState } from '../../main/store/AppState';
import { getMentorshipsThunk } from '../../main/store/mentoring/getMentorshipsThunk';
import { getPlaylistsThunk } from '../../main/store/playlists/getPlaylistsThunk';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';
import { getUserThunk } from '../../main/store/user/getUserThunk';
import { getVideosThunk } from '../../main/store/videos/getVideosThunk';

const OtherProfileNextPage: NextPage = () => {
  const pageTitle = 'Profile';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <OthersProfilePageContainer />
    </div>
  );
};

OtherProfileNextPage.getInitialProps = async ({
  reduxStore,
  query,
}: NextPageContext & { reduxStore: Store<AppState> }) => {
  reduxStore.dispatch(setInitialStateAction());

  const userId = (query?.id as string) || '';

  const request = SearchPlaylistsRequest.create({
    uid: userId,
  });
  const result = await getPlaylistsThunk(request)(reduxStore.dispatch);

  const request2 = SearchVideosRequest.create({
    uid: userId,
  });
  const result2 = await getVideosThunk(request2)(reduxStore.dispatch);

  const request3 = SearchMentorshipsRequest.create({
    uid: userId,
  });
  const result3 = await getMentorshipsThunk(request3)(reduxStore.dispatch);

  const result4 = await getUserThunk(userId)(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  if (!result2.isOk) {
    return { statusCode: result2.error };
  }

  if (!result3.isOk) {
    return { statusCode: result3.error };
  }

  if (!result4.isOk) {
    return { statusCode: result4.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default OtherProfileNextPage;
