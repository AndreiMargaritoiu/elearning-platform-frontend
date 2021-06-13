import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { Store } from 'redux';

import { NotificationsPageContainer } from '../../main/pages/Notifications/NotificationsPageContainer';
import { AppState } from '../../main/store/AppState';
import { getMyInquiriesThunk } from '../../main/store/inquiries/getMyInquiriesThunk';
import { setInitialStateAction } from '../../main/store/setInitialStateAction';

const NotificationsNextPage: NextPage = () => {
  const pageTitle = 'Notifications';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <NotificationsPageContainer />
    </div>
  );
};

// NotificationsNextPage.getInitialProps = async ({
//   reduxStore,
//   query,
// }: NextPageContext & { reduxStore: Store<AppState> }) => {
//   reduxStore.dispatch(setInitialStateAction());

//   const result = await getMyInquiriesThunk(reduxStore.getState().appUser.uid)(
//     reduxStore.dispatch,
//   );

//   if (!result.isOk) {
//     return { statusCode: result.error };
//   }

//   return { reduxStore: reduxStore.getState() };
// };

export default NotificationsNextPage;
