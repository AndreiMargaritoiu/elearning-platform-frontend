import { Dispatch } from 'redux';

import { User } from './User';

export interface NotificationsWebSocket {
  initWebSocket(dispatch: Dispatch, appUser: User): void;
  onMessageListener(ws: WebSocket, dispatch: Dispatch): void;
  onCloseListener(ws: WebSocket, dispatch: Dispatch, appUser: User): void;
  onSendMessage(data: any): void;
}
