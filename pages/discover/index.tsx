import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';

import { SearchVideosRequest } from '../../main/domain/SearchVideosRequest';
import { DiscoverPageContainer } from '../../main/pages/Discover/DiscoverPageContainer';
import { AppState } from '../../main/store/AppState';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';
import { getVideosThunk } from '../../main/store/videos/getVideosThunk';
import { getAllWorkshopsThunk } from '../../main/store/workshops/getAllWorkshopsThunk';

const DiscoverNextPage: NextPage = () => {
  const pageTitle = 'Discover';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DiscoverPageContainer />
    </div>
  ); 
};

DiscoverNextPage.getInitialProps = async ({
  reduxStore,
}: NextPageContext & { reduxStore: Store<AppState> }) => {
  reduxStore.dispatch(setInitialStateAction());

  const result = await getAllWorkshopsThunk()(reduxStore.dispatch);

  const request2 = SearchVideosRequest.create({
    trending: true,
  });
  const result2 = await getVideosThunk(request2)(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  if (!result2.isOk) {
    return { statusCode: result2.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default DiscoverNextPage;
