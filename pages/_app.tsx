import App, { AppContext, AppProps } from 'next/app';
import Router from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import swal from 'sweetalert2';

import { withStore } from '../main/components/withRedux';
import { Context } from '../main/Context';
import { HttpApiService } from '../main/services/HttpApiService';
import { AppState } from '../main/store/AppState';

Context.initialize({
  alertService: swal,
  apiService: new HttpApiService(),
  routerService: Router,
});

class ElearningPlatform extends App<
  AppProps & { reduxStore: Store<AppState> }
> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    ctx.res?.setHeader('Cache-Control', 'max-age=0');

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <main id="content">
          <Component {...pageProps} />
        </main>
      </Provider>
    );
  }
}

export default withStore(ElearningPlatform);
