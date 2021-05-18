import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Media from 'react-media';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import {
  Mentorship,
  UpdateMentorshipRequest,
} from '../../../domain/Mentorship';
import {
  MentoringModal,
  MentoringModalState,
} from '../../Mentoring/AddEditMentorshipModal';
import {
  StyledProfileContentCard,
  StyledProfileContentCardDetails,
  StyledProfileContentTitle,
  StyledProfileContentDescription,
  StyledProfileContent,
} from './UsersContentFeedStyles';

export interface UsersMentorshipsFeedProps {
  mentorships: Mentorship[];
  deleteMentorship?(mentorshipId: string): void;
  updateMentorship?(
    mentorshipId: string,
    request: UpdateMentorshipRequest,
  ): void;
}

export const UsersMentorshipsFeed: React.FC<UsersMentorshipsFeedProps> = (
  props: UsersMentorshipsFeedProps,
) => {
  const { mentorships, deleteMentorship, updateMentorship } = props;

  const [modalState, setModalState] = useState<MentoringModalState>({
    isOpen: false,
    isEdit: false,
    id: '',
    description: '',
    price: 0,
  });

  const handleEditMentorship = (mentorship: Mentorship) => {
    setModalState({
      isOpen: true,
      isEdit: true,
      id: mentorship.id,
      description: mentorship.description,
      price: mentorship.price,
    });
  };

  return (
    <StyledProfileContent>
      <>
        {modalState.isOpen && updateMentorship && (
          <MentoringModal
            modalState={modalState}
            setModalState={setModalState}
            updateMentoringInfo={updateMentorship}
          />
        )}
      </>
      {mentorships.map((mentorship: Mentorship) => (
        <StyledProfileContentCard className="mentorship-card">
          <StyledProfileContentCardDetails>
            <StyledProfileContentTitle>
              {mentorship.description}
            </StyledProfileContentTitle>
            <StyledProfileContentDescription>
              Price: {mentorship.price} €/hour
            </StyledProfileContentDescription>
          </StyledProfileContentCardDetails>
          {deleteMentorship && (
            <Media
              queries={{
                mobile: `(max-width: 767px)`,
                tablet: `(min-width: 768px)`,
              }}
            >
              {(matches) =>
                !matches.mobile && matches.tablet ? (
                  <StyledProfileContentCardDetails className="actions">
                    <Button
                      variant="contained"
                      className="first-button"
                      onClick={() => handleEditMentorship(mentorship)}
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
                ) : (
                  <StyledProfileContentCardDetails className="actions">
                    <EditIcon
                      className="first-button"
                      onClick={() => handleEditMentorship(mentorship)}
                    />
                    <DeleteOutlineIcon
                      onClick={() => deleteMentorship(mentorship.id)}
                    />
                  </StyledProfileContentCardDetails>
                )
              }
            </Media>
          )}
        </StyledProfileContentCard>
      ))}
    </StyledProfileContent>
  );
};
