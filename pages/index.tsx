import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { DashboardPageContainer } from '../main/pages/Dashboard/DashboardPageContainer';

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

export default Dashboard;
