import React, { FC, useEffect } from 'react';

import {
  NotificationsPageProps,
  NotificationsDispatchProps,
} from './NotificationsPageContainer';
import {
  SeparatorStyles,
  StyledNotificationsContainer,
  StyledNotificationsPage,
  StyledNotificationText,
} from './NotificationsPageStyles';

const NotificationsPage: FC<
  NotificationsPageProps & NotificationsDispatchProps
> = (props) => {
  const { inquiries, getMyNotifications, readNotifications } = props;

  const unreadNotifications: string[] = [];

  useEffect(() => {
    getMyNotifications();
  }, []);

  useEffect(() => {
    inquiries.map((item) => {
      if (!item.read) {
        unreadNotifications.push(item.id);
      }
    });
    if (unreadNotifications.length > 0) {
      readNotifications(unreadNotifications);
    }
  }, [inquiries.length]);

  return (
    <StyledNotificationsPage>
      <StyledNotificationsContainer>
        {inquiries.map((item, index) => (
          <div key={`notification-item-${index}`}>
            <StyledNotificationText>
              {item.inquirerEmail} wants to know more details about your
              mentorship offer(s)
            </StyledNotificationText>
            <SeparatorStyles />
          </div>
        ))}
      </StyledNotificationsContainer>
    </StyledNotificationsPage>
  );
};

export { NotificationsPage };
