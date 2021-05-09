import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';

import { SearchVideosRequest } from '../../main/domain/SearchVideosRequest';
import { AddContentPageContainer } from '../../main/pages/AddContent/AddContentPageContainer';
import { AppState } from '../../main/store/AppState';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';
import { getVideosThunk } from '../../main/store/videos/getVideosThunk';
const AddContentNextPage: NextPage = () => {
  const pageTitle = 'Add content';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AddContentPageContainer />
    </div>
  );
};

AddContentNextPage.getInitialProps = async ({
  reduxStore,
}: NextPageContext & { reduxStore: Store<AppState> }) => {
  reduxStore.dispatch(setInitialStateAction());

  const request = SearchVideosRequest.create({
    uid: reduxStore.getState().appUser.uid,
  });
  const result = await getVideosThunk(request)(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default AddContentNextPage;
