import { Dispatch } from 'redux';
import { SendInquiryRequest } from '../domain/Inquiry';

import { NotificationsWebSocket } from '../domain/NotificationsWebSocket';
import { User } from '../domain/User';
import { receiveInquirySuccessAction } from '../store/inquiries/inquiriesActions';

export class NotificationsWebSocketService implements NotificationsWebSocket {
  initWebSocket = (dispatch: Dispatch, appUser: User) => {
    const ws = new WebSocket(WEB_SOCKET_BASE_URL, [appUser.uid]);
    this.onMessageListener(ws, dispatch);
    this.onCloseListener(ws, dispatch, appUser);
  };

  onMessageListener(ws: WebSocket, dispatch: Dispatch): void {
    ws.onmessage = (event: any) => {
      const notification = JSON.parse(event.data);

      dispatch(receiveInquirySuccessAction(notification));
    };
  }

  onCloseListener(ws: WebSocket, dispatch: Dispatch, appUser: User): void {
    ws.onclose = () => {
      this.initWebSocket(dispatch, appUser);
    };
  }

  onSendMessage(data: any): void {
    const ws = new WebSocket(WEB_SOCKET_BASE_URL_SEND);
    ws.onopen = () => {
      ws.send(data);
    };
  }
}
