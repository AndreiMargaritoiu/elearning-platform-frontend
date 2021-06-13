import React from 'react';
import { connect } from 'react-redux';

import { Inquiry } from '../../domain/Inquiry';
import { User } from '../../domain/User';
import { AppState } from '../../store/AppState';
import { getMyInquiriesThunk } from '../../store/inquiries/getMyInquiriesThunk';
import { readInquiriesThunk } from '../../store/inquiries/readInquiriesThunk';
import { NotificationsPage } from './NotificationsPage';

export interface NotificationsPageProps {
  inquiries: Inquiry[];
  appUser: User;
}

export interface NotificationsDispatchProps {
  getMyNotifications(): void;
  readNotifications(notifications: string[]): void;
}

const mapStateToProps = ({
  appUser,
  inquiries,
}: AppState): NotificationsPageProps => ({
  appUser,
  inquiries,
});

const mapDispatch: NotificationsDispatchProps = {
  getMyNotifications: getMyInquiriesThunk,
  readNotifications: readInquiriesThunk,
};

export const NotificationsPageContainer = connect<
  NotificationsPageProps,
  NotificationsDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: NotificationsPageProps & NotificationsDispatchProps) => {
  return <NotificationsPage {...props} />;
});
