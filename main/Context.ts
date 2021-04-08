import { NextRouter } from 'next/router';
import { AlertService } from './domain/AlertService';

import { ApiService } from './domain/ApiService';

interface ContextDependencies {
  alertService: AlertService;
  apiService: ApiService;
  routerService: NextRouter;
}

export class Context {
  static alertService: AlertService;
  static apiService: ApiService;
  static routerService: NextRouter;
  static BASE_PATH: string = '';

  static initialize(dependencies: ContextDependencies) {
    Context.alertService = dependencies.alertService;
    Context.apiService = dependencies.apiService;
    Context.routerService = dependencies.routerService;
  }
}
