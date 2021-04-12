import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { app } from '../main/services/Firebase';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (app.auth().currentUser) {
      router.push('dashboard');
    } else {
      router.push('login');
    }
  });

  return <label>Loading...</label>;
};

export default Home;
