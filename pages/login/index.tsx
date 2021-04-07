import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import LoginPage from '../../main/pages/Login/LoginPage';

const Login: NextPage = () => {
  const pageTitle = 'Login';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LoginPage />
    </div>
  );
};

export default Login;
