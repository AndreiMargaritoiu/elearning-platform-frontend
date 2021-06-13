import App, { AppContext, AppProps } from 'next/app';
import Router from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import swal from 'sweetalert2';
import 'react-multi-carousel/lib/styles.css';

import { FirebaseAuthenticator } from '../main/components/FirebaseAuthenticator';
import { PageLayout } from '../main/components/PageLayout';
import { withStore } from '../main/components/withRedux';
import { Context } from '../main/Context';
import { HttpApiService } from '../main/services/HttpApiService';
import { AppState } from '../main/store/AppState';
import { MomentService } from '../main/services/MomentService';
import { auth } from '../main/services/Firebase';
import { CookieAPI } from '../main/services/CookieAPI';

Context.initialize({
  alertService: swal,
  apiService: new HttpApiService(),
  routerService: Router,
  dateService: new MomentService(),
  cookieService: new CookieAPI(),
});

const publicRoutes = ['', '/login', '/signup', '/reset-password'];

class ElearningPlatform extends App<
  AppProps & { reduxStore: Store<AppState> }
> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    ctx.res?.setHeader('Cache-Control', 'max-age=0');

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const cookies = ctx.req?.headers.cookie;
    if (cookies) {
      const token: string = Context.cookieService.getCookieForSSR(
        cookies,
        'uat',
      );
      Context.apiService.setAuthToken(token);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore, router } = this.props;
    const route = router.route;

    return (
      <Provider store={reduxStore}>
        {publicRoutes.includes(route) ? (
          <Component {...pageProps} />
        ) : (
          <FirebaseAuthenticator>
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          </FirebaseAuthenticator>
        )}
      </Provider>
    );
  }
}

export default withStore(ElearningPlatform);
