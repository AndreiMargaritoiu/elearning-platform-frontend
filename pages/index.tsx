import { NextPage } from 'next';
import React from 'react';

import { app } from '../main/components/firebase';
import { Context } from '../main/Context';

const Home: NextPage = () => {
  if (app.auth().currentUser) {
    Context.routerService.push('dashboard');
  } else {
    Context.routerService.push('login');
  }

  return <label>Loading...</label>;
};

export default Home;
