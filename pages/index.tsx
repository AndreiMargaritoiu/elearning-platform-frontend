import { NextPage } from 'next';
import React from 'react';

import { Context } from '../main/Context';
import { app } from '../main/services/Firebase';

const Home: NextPage = () => {
  if (app.auth().currentUser) {
    Context.routerService.push('dashboard');
  } else {
    Context.routerService.push('login');
  }

  return <label>Loading...</label>;
};

export default Home;
