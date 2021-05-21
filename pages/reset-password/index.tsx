import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import ForgotPasswordPage from '../../main/pages/ForgotPassword/ForgotPasswordPage';

const ResetPass: NextPage = () => {
  const pageTitle = 'Reset password';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ForgotPasswordPage />
    </div>
  );
};

export default ResetPass;
