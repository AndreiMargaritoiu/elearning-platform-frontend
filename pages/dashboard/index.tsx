import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';
import { SearchUsersRequest } from '../../main/domain/SearchUsersRequest';

import { SearchVideosRequest } from '../../main/domain/SearchVideosRequest';
import { DashboardPageContainer } from '../../main/pages/Dashboard/DashboardPageContainer';
import { AppState } from '../../main/store/AppState';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';
import { getUsersThunk } from '../../main/store/users/getUsersThunks';
import { getVideosThunk } from '../../main/store/videos/getVideosThunk';

const Dashboard: NextPage = () => {
  const pageTitle = 'Dashboard';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DashboardPageContainer />
    </div>
  );
};

Dashboard.getInitialProps = async ({
  reduxStore,
  query,
}: NextPageContext & { reduxStore: Store<AppState> }) => {
  reduxStore.dispatch(setInitialStateAction());

  const request = SearchVideosRequest.create(query);
  const result = await getVideosThunk(request)(reduxStore.dispatch);

  const request2 = SearchUsersRequest.create();
  const result2 = await getUsersThunk(request2)(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  if (!result2.isOk) {
    return { statusCode: result2.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default Dashboard;
