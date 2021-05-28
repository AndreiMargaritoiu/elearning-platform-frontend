import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';

import { PlaylistPageContainer } from '../../main/pages/PlaylistPage/PlaylistPageContainer';
import { AppState } from '../../main/store/AppState';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';
import { getPlaylistThunk } from '../../main/store/playlist/getPlaylistThunk';
import { SearchVideosRequest } from '../../main/domain/SearchVideosRequest';
import { getVideosThunk } from '../../main/store/videos/getVideosThunk';
import { getTrackedItemsThunk } from '../../main/store/tracking/getTrackedItemsThunk';
import { SearchUsersRequest } from '../../main/domain/SearchUsersRequest';
import { getUsersThunk } from '../../main/store/users/getUsersThunks';

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

PlaylistNextPage.getInitialProps = async ({
  reduxStore,
  query,
}: NextPageContext & { reduxStore: Store<AppState> }) => {
  reduxStore.dispatch(setInitialStateAction());

  const playlistId = (query?.id as string) || '';
  const result = await getPlaylistThunk(playlistId)(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  const request2 = SearchVideosRequest.create({
    playlistId,
  });
  const result2 = await getVideosThunk(request2)(reduxStore.dispatch);

  if (!result2.isOk) {
    return { statusCode: result2.error };
  }

  const result3 = await getTrackedItemsThunk(reduxStore.getState().appUser.uid)(
    reduxStore.dispatch,
  );

  if (!result3.isOk) {
    return { statusCode: result3.error };
  }

  const request4 = SearchUsersRequest.create();
  const result4 = await getUsersThunk(request4)(reduxStore.dispatch);

  if (!result4.isOk) {
    return { statusCode: result4.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default PlaylistNextPage;
