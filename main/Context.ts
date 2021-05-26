import { NextRouter } from 'next/router';

import { AlertService } from './domain/AlertService';
import { ApiService } from './domain/ApiService';
import { DateService } from './domain/DateService';
import { NotificationsWebSocket } from './domain/NotificationsWebSocket';

interface ContextDependencies {
  alertService: AlertService;
  apiService: ApiService;
  dateService: DateService;
  routerService: NextRouter;
  notificationsWebSocketService: NotificationsWebSocket;
}

export class Context {
  static alertService: AlertService;
  static apiService: ApiService;
  static dateService: DateService;
  static routerService: NextRouter;
  static notificationsWebSocketService: NotificationsWebSocket;
  static BASE_PATH: string = '';

  static initialize(dependencies: ContextDependencies) {
    Context.alertService = dependencies.alertService;
    Context.apiService = dependencies.apiService;
    Context.dateService = dependencies.dateService;
    Context.routerService = dependencies.routerService;
    Context.notificationsWebSocketService =
      dependencies.notificationsWebSocketService;
  }
}
