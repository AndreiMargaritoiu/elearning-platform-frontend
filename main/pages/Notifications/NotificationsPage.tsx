import React, { FC, useEffect, useState } from 'react';

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

  const [unreadNotifications, setUnreadNotifications] = useState<string[]>([]);

  useEffect(() => {
    getMyNotifications();
  }, []);

  useEffect(() => {
    inquiries.map((item) => {
      if (!item.read) {
        setUnreadNotifications([...unreadNotifications, item.id]);
      }
    });
    if (unreadNotifications.length > 0) {
      readNotifications(unreadNotifications);
    }
  }, [inquiries]);

  return (
    <StyledNotificationsPage>
      <StyledNotificationsContainer>
        {inquiries.map((item) => (
          <>
            <StyledNotificationText>
              {item.inquirerEmail} wants to know more details about your
              mentorship offer(s)
            </StyledNotificationText>
            <SeparatorStyles />
          </>
        ))}
      </StyledNotificationsContainer>
    </StyledNotificationsPage>
  );
};

export { NotificationsPage };
