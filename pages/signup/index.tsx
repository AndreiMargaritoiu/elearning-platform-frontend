import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import SignUpPage from '../../main/pages/SignUp/SignUpPage';

const SignUp: NextPage = () => {
  const pageTitle = 'Sign up';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <SignUpPage />
    </div>
  );
};

export default SignUp;
