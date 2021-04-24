import { Button } from '@material-ui/core';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { Context } from '../../Context';
import { SendInquiryRequest } from '../../domain/Inquiry';

import {
  FilterCategories,
  GetMentorshipsRequest,
  Mentorship,
} from '../../domain/Mentorship';
import { User } from '../../domain/User';
import {
  MentoringDispatchProps,
  MentoringPageProps,
} from './MentoringPageContainer';
import {
  StyledFilterItem,
  StyledMentoringCard,
  StyledMentoringCardBodyDiv,
  StyledMentoringCardDescription,
  StyledMentoringCardPrice,
  StyledMentoringCardUserDiv,
  StyledMentoringFilters,
  StyledMentoringOffers,
  StyledMentoringOwnerTitle,
  StyledMentoringPage,
  StyledMentorProfilePicture,
} from './MentoringPageStyles';

const MentoringPage: FC<MentoringPageProps & MentoringDispatchProps> = (
  props,
) => {
  const { appUser, mentorships, users, getMentorships, sendInquiry } = props;

  const [chosenFilter, setChosenFilter] = useState<string>('All');

  const predefinedFilters = [
    'All',
    FilterCategories.SCHOOL,
    FilterCategories.FACULTY,
    FilterCategories.OTHER,
  ];

  console.log(mentorships);

  const handlePredefinedFilter = (filterItem: string) => {
    setChosenFilter(filterItem);
    if (filterItem !== 'All') {
      const request: GetMentorshipsRequest = {
        categories: [filterItem],
      };
      getMentorships(request);
    } else {
      getMentorships({});
    }
  };

  const handleSendInquiry = (mentorId: string) => {
    const request: SendInquiryRequest = {
      mentorId,
      inquirerEmail: appUser.email,
    };
    sendInquiry(request);
  };

  const getProfilePictureUrl = (mentorId: string): string => {
    const currentUser: User | undefined = users.find(
      (it: User) => it.uid === mentorId,
    );

    return currentUser ? currentUser.profilePictureUrl : '';
  };

  return (
    <StyledMentoringPage>
      <StyledMentoringOwnerTitle>
        Inspire others, get inspired
      </StyledMentoringOwnerTitle>
      <StyledMentoringFilters>
        {predefinedFilters.map((filterItem) => (
          <StyledFilterItem
            active={chosenFilter === filterItem}
            onClick={() => handlePredefinedFilter(filterItem)}
          >
            {filterItem}
          </StyledFilterItem>
        ))}
      </StyledMentoringFilters>
      <StyledMentoringOffers>
        {mentorships
          .filter(
            (mentorship: Mentorship) => mentorship.mentorId !== appUser.uid,
          )
          .map((mentorship: Mentorship) => (
            <StyledMentoringCard>
              <Link
                href={`${Context.BASE_PATH}/profiles/[id]`}
                as={`${Context.BASE_PATH}/profiles/${mentorship.mentorId}`}
              >
                <StyledMentoringCardUserDiv>
                  {/* <StyledMentorProfilePicture
                    imgSrc={getProfilePictureUrl(mentorship.mentorId)}
                    role="img"
                  /> */}
                  {mentorship.mentorEmail}
                </StyledMentoringCardUserDiv>
              </Link>
              <StyledMentoringCardBodyDiv>
                <StyledMentoringOffers>
                  <StyledMentoringCardDescription>
                    {mentorship.description}
                  </StyledMentoringCardDescription>
                  <StyledMentoringCardPrice>
                    Price: {mentorship.price} €/hour
                  </StyledMentoringCardPrice>
                </StyledMentoringOffers>
                <StyledMentoringOffers>
                  <Button
                    variant="contained"
                    onClick={() => handleSendInquiry(mentorship.mentorId)}
                  >
                    ASK DETAILS
                  </Button>
                </StyledMentoringOffers>
              </StyledMentoringCardBodyDiv>
            </StyledMentoringCard>
          ))}
      </StyledMentoringOffers>
    </StyledMentoringPage>
  );
};

export { MentoringPage };
