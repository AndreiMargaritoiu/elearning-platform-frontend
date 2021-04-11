import { Button } from '@material-ui/core';
import React, { FC, useState } from 'react';
import {
  MentoringModal,
  MentoringModalState,
} from '../../components/MentoringPage/AddEditMentorshipModal';

import { Mentorship } from '../../domain/Mentorship';
import {
  MentoringDispatchProps,
  MentoringPageProps,
} from './MentoringPageContainer';
import {
  StyledMentoringCard,
  StyledMentoringCardDescription,
  StyledMentoringCardPrice,
  StyledMentoringCardUserDiv,
  StyledMentoringOffers,
  StyledMentoringOwnerTitle,
  StyledMentoringPage,
  StyledMentorshipActions,
  StyledPersonalMentoringOffers,
} from './MentoringPageStyles';

const MentoringPage: FC<MentoringPageProps & MentoringDispatchProps> = (
  props,
) => {
  const {
    appUser,
    mentorships,
    getMentorships,
    addMentorship,
    updateMentorship,
    deleteMentorship,
  } = props;

  //   useEffect(() => {
  //     const getPlaylistsRequest: GetPlaylistsRequest = {};
  //     getPlaylists(getPlaylistsRequest);
  //     const getMentoringsRequest: GetPlaylistsRequest = {};
  //     getMentorings(getMentoringsRequest);
  //   });

  console.log(mentorships);

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
    <StyledMentoringPage>
      <>
        {modalState.isOpen && (
          <MentoringModal
            modalState={modalState}
            setModalState={setModalState}
            updateMentoringInfo={updateMentorship}
          />
        )}
      </>
      <StyledMentoringOffers>
        <StyledMentoringOwnerTitle>Offers</StyledMentoringOwnerTitle>
        {mentorships
          .filter(
            (mentorship: Mentorship) =>
              mentorship.mentorEmail !== appUser.email,
          )
          .map((mentorship: Mentorship) => (
            <StyledMentoringCard>
              <StyledMentoringCardUserDiv>
                {mentorship.mentorEmail}
              </StyledMentoringCardUserDiv>
              <StyledMentoringCardDescription>
                {mentorship.description}
              </StyledMentoringCardDescription>
              <StyledMentoringCardPrice>
                Price: {mentorship.price}
              </StyledMentoringCardPrice>
            </StyledMentoringCard>
          ))}
      </StyledMentoringOffers>
      <StyledMentoringOffers>
        <StyledMentoringOwnerTitle>Yours</StyledMentoringOwnerTitle>
        {mentorships
          .filter(
            (mentorship: Mentorship) =>
              mentorship.mentorEmail === appUser.email,
          )
          .map((mentorship: Mentorship) => (
            <StyledPersonalMentoringOffers>
              <StyledMentoringCard>
                <StyledMentoringCardUserDiv>
                  {mentorship.mentorEmail}
                </StyledMentoringCardUserDiv>
                <StyledMentoringCardDescription>
                  {mentorship.description}
                </StyledMentoringCardDescription>
                <StyledMentoringCardPrice>
                  Price: {mentorship.price}
                </StyledMentoringCardPrice>
              </StyledMentoringCard>
              <StyledMentorshipActions>
                <Button
                  variant="contained"
                  className="qa-automation-add-user-button add-user-button"
                  onClick={() => handleEditMentorship(mentorship)}
                >
                  EDIT
                </Button>
                <Button
                  variant="contained"
                  className="qa-automation-add-user-button add-user-button"
                  onClick={() => deleteMentorship(mentorship.id)}
                >
                  DELETE
                </Button>
              </StyledMentorshipActions>
            </StyledPersonalMentoringOffers>
          ))}
      </StyledMentoringOffers>
    </StyledMentoringPage>
  );
};

export { MentoringPage };
