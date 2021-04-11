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

  return { reduxStore: reduxStore.getState() };
};

export default PlaylistNextPage;
