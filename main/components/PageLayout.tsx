import React from 'react';
import { connect } from 'react-redux';

import { User } from '../domain/User';
import { Header } from '../components/Header/Header';
import { AppState } from '../store/AppState';
import { Inquiry } from '../domain/Inquiry';
import { getMyInquiriesThunk } from '../store/inquiries/getMyInquiriesThunk';

export interface LayoutStateProps {
  appUser: User;
  inquiries: Inquiry[];
}

export interface LayoutDispatchProps {
  getMyNotifications(userId: string): void;
}

interface LayoutProps {
  children: React.ReactNode;
}

type Props = LayoutStateProps & LayoutDispatchProps & LayoutProps;

const UnconnectedPageLayout: React.FC<Props> = (props) => {
  const { appUser, inquiries, children, getMyNotifications } = props;

  return (
    <>
      <Header
        appUser={appUser}
        inquiries={inquiries}
        getMyNotifications={getMyNotifications}
      />
      <main id="content">{children}</main>
    </>
  );
};

const mapState = ({ appUser, inquiries }: AppState): LayoutStateProps => ({
  appUser,
  inquiries,
});

const mapDispatch: LayoutDispatchProps = {
  getMyNotifications: getMyInquiriesThunk,
};

export const PageLayout = connect<
  LayoutStateProps,
  LayoutDispatchProps,
  LayoutProps,
  AppState
>(
  mapState,
  mapDispatch,
)(UnconnectedPageLayout);
