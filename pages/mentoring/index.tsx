import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';

import { MentoringPageContainer } from '../../main/pages/MentoringPage/MentoringPageContainer';
import { AppState } from '../../main/store/AppState';
import { getMentorshipsThunk } from '../../main/store/mentoring/getMentorshipsThunk';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';

const MentoringNextPage: NextPage = () => {
  const pageTitle = 'Mentoring';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <MentoringPageContainer />
    </div>
  );
};

MentoringNextPage.getInitialProps = async ({
  reduxStore,
}: NextPageContext & { reduxStore: Store<AppState> }) => {
  reduxStore.dispatch(setInitialStateAction());

  const result = await getMentorshipsThunk()(reduxStore.dispatch);

  if (!result.isOk) {
    return { statusCode: result.error };
  }

  return { reduxStore: reduxStore.getState() };
};

export default MentoringNextPage;
