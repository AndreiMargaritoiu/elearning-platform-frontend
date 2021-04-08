import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';

import { VideoPageContainer } from '../../main/pages/VideoPage/VideoPageContainer';
import { AppState } from '../../main/store/AppState';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';
import { getVideoThunk } from '../../main/store/video/getVideoThunk';

const VideoNextPage: NextPage = () => {
  const pageTitle = 'Video';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <VideoPageContainer />
    </div>
  );
};

VideoNextPage.getInitialProps = async ({
  reduxStore,
  query,
}: NextPageContext & { reduxStore: Store<AppState> }) => {
  reduxStore.dispatch(setInitialStateAction());

  const videoId = (query?.id as string) || '';
  const result = await getVideoThunk(videoId)(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default VideoNextPage;
