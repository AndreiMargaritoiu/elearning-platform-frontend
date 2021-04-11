import { Button } from '@material-ui/core';
import React from 'react';

import {
  Mentorship,
  UpdateMentorshipRequest,
} from '../../../domain/Mentorship';
import {
  StyledProfileContentCard,
  StyledProfileContentThumbnail,
  StyledProfileContentCardDetails,
  StyledProfileContentTitle,
  StyledProfileContentDescription,
  StyledProfileContent,
} from './UsersContentFeedStyles';

export interface UsersMentorshipsFeedProps {
  mentorships: Mentorship[];
  deleteMentorship(mentorshipId: string): void;
  updateMentorship(
    mentorshipId: string,
    request: UpdateMentorshipRequest,
  ): void;
}

export const UsersMentorshipsFeed: React.FC<UsersMentorshipsFeedProps> = (
  props: UsersMentorshipsFeedProps,
) => {
  const { mentorships, deleteMentorship, updateMentorship } = props;

  return (
    <StyledProfileContent>
      {mentorships.map((mentorship: Mentorship) => (
        <StyledProfileContentCard>
          <StyledProfileContentCardDetails>
            <StyledProfileContentTitle>
              {mentorship.description}
            </StyledProfileContentTitle>
            <StyledProfileContentDescription>
              Price: {mentorship.price}€
            </StyledProfileContentDescription>
          </StyledProfileContentCardDetails>
          <StyledProfileContentCardDetails className="actions">
            <Button
              variant="contained"
              // onClick={() => handleEditMentorship(mentorship)}
            >
              EDIT
            </Button>
            <Button
              variant="contained"
              onClick={() => deleteMentorship(mentorship.id)}
            >
              DELETE
            </Button>
          </StyledProfileContentCardDetails>
        </StyledProfileContentCard>
      ))}
    </StyledProfileContent>
  );
};
