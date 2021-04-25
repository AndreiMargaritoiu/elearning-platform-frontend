import React from 'react';
import { connect } from 'react-redux';

import { SearchVideosRequest } from '../../domain/SearchVideosRequest';
import { Video } from '../../domain/Video';
import { Workshop } from '../../domain/Workshop';
import { AppState } from '../../store/AppState';
import { getVideosThunk } from '../../store/videos/getVideosThunk';
import { getAllWorkshopsThunk } from '../../store/workshops/getAllWorkshopsThunk';
import { DiscoverPage } from './DiscoverPage';

export interface DiscoverPageProps {
  videos: Video[];
  workshops: Workshop[];
}

export interface DiscoverPageDispatchProps {
  getTrendingVideos(request: SearchVideosRequest): void;
  getWorkshops(): void;
}

const mapStateToProps = ({
  videos,
  workshops,
}: AppState): DiscoverPageProps => ({
  videos,
  workshops,
});

const mapDispatch: DiscoverPageDispatchProps = {
  getTrendingVideos: getVideosThunk,
  getWorkshops: getAllWorkshopsThunk,
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
