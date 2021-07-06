import { NextRouter } from 'next/router';

import { AlertService } from './domain/AlertService';
import { ApiService } from './domain/ApiService';
import { CookieService } from './domain/CookieService';
import { DateService } from './domain/DateService';

interface ContextDependencies {
  alertService: AlertService;
  apiService: ApiService;
  dateService: DateService;
  routerService: NextRouter;
  cookieService: CookieService;
}

export class Context {
  static alertService: AlertService;
  static apiService: ApiService;
  static dateService: DateService;
  static routerService: NextRouter;
  static cookieService: CookieService;
  static BASE_PATH: string = '';

  static initialize(dependencies: ContextDependencies) {
    Context.alertService = dependencies.alertService;
    Context.apiService = dependencies.apiService;
    Context.dateService = dependencies.dateService;
    Context.routerService = dependencies.routerService;
    Context.cookieService = dependencies.cookieService;
  }
}
