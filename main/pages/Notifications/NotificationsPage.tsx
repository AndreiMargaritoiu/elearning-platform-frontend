import React, { FC, useEffect, useState } from 'react';

import { StyledMentoringPage } from '../MentoringPage/MentoringPageStyles';
import {
  NotificationsPageProps,
  NotificationsDispatchProps,
} from './NotificationsPageContainer';

const NotificationsPage: FC<
  NotificationsPageProps & NotificationsDispatchProps
> = (props) => {
  const { appUser, inquiries, getMyNotifications, readNotifications } = props;
  const [unreadNotifications, setUnreadNotifications] = useState<string[]>([]);

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
    <StyledMentoringPage>
      {inquiries.map((item) => (
        <label>
          {item.inquirerEmail} wants to know more details about ypur mentorship
          offer(s)
        </label>
      ))}
    </StyledMentoringPage>
  );
};

export { NotificationsPage };
