import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';
import { SearchVideosRequest } from '../../main/domain/SearchVideosRequest';

import { VideoPageContainer } from '../../main/pages/VideoPage/VideoPageContainer';
import { AppState } from '../../main/store/AppState';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';
import { getTrackedItemsThunk } from '../../main/store/tracking/getTrackedItemsThunk';
import { getUsersThunk } from '../../main/store/users/getUsersThunks';
import { getVideoThunk } from '../../main/store/video/getVideoThunk';
import { getVideosThunk } from '../../main/store/videos/getVideosThunk';

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

  const request2 = SearchVideosRequest.create(query);
  const result2 = await getVideosThunk(request2)(reduxStore.dispatch);

  if (!result2.isOk) {
    return { statusCode: result2.error };
  }

  const result3 = await getUsersThunk()(reduxStore.dispatch);

  if (!result3.isOk) {
    return { statusCode: result3.error };
  }

  const result4 = await getTrackedItemsThunk(reduxStore.getState().appUser.uid)(
    reduxStore.dispatch,
  );

  if (!result4.isOk) {
    return { statusCode: result4.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default VideoNextPage;
