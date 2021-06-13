import React from 'react';
import { connect } from 'react-redux';
import { SearchUsersRequest } from '../../domain/SearchUsersRequest';

import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { User } from '../../domain/User';
import { Video } from '../../domain/Video';
import { Workshop } from '../../domain/Workshop';
import { AppState } from '../../store/AppState';
import { getUsersThunk } from '../../store/users/getUsersThunks';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { getAllWorkshopsThunk } from '../../store/workshops/getAllWorkshopsThunk';
import { registerToWorkshopThunk } from '../../store/workshops/registerToWorkshopThunk';
import { DiscoverPage } from './DiscoverPage';

export interface DiscoverPageProps {
  videos: Video[];
  workshops: Workshop[];
  users: User[];
  appUser: User;
}

export interface DiscoverPageDispatchProps {
  getTrendingVideos(request: SearchVideosRequest): void;
  getUsers(request: SearchUsersRequest): void;
  getWorkshops(): void;
  registerToWorkshop(workshopId: string): void;
}

const mapStateToProps = ({
  videos,
  workshops,
  users,
  appUser,
}: AppState): DiscoverPageProps => ({
  videos,
  workshops,
  users,
  appUser,
});

const mapDispatch: DiscoverPageDispatchProps = {
  getTrendingVideos: getVideosThunk,
  getWorkshops: getAllWorkshopsThunk,
  registerToWorkshop: registerToWorkshopThunk,
  getUsers: getUsersThunk,
};

export const DiscoverPageContainer = connect<
  DiscoverPageProps,
  DiscoverPageDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatch,
)((props: DiscoverPageProps & DiscoverPageDispatchProps) => {
  return <DiscoverPage {...props} />;
});
