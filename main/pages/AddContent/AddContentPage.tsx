import React, { FC } from 'react';

import {
  AddContentPageProps,
  AddContentPageDispatchProps,
} from './AddContentPageContainer';
import { StyledAddContentPageContainer } from './AddContentPageStyles';

const AddContentPage: FC<AddContentPageProps & AddContentPageDispatchProps> = (
  props,
) => {
  const { videos } = props;

  return (
    <StyledAddContentPageContainer>
      <label>Workshops</label>
    </StyledAddContentPageContainer>
  );
};

export { AddContentPage };
