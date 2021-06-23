import { Button } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import Media from 'react-media';

import { Context } from '../../Context';
import { FilterCategories } from '../../domain/FilterCategories';
import { SendInquiryRequest } from '../../domain/Inquiry';
import { Mentorship } from '../../domain/Mentorship';
import { SearchMentorshipsRequest } from '../../domain/SearchMentorshipsRequest';
import { SearchUsersRequest } from '../../domain/SearchUsersRequest';
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
  StyledFiltersBar,
  StyledMentoringOffers,
  StyledMentoringOwnerTitle,
  StyledMentoringPage,
  StyledMentoringUserProfilePic,
  StyledMentoringUsername,
} from './MentoringPageStyles';

const MentoringPage: FC<MentoringPageProps & MentoringDispatchProps> = (
  props,
) => {
  const {
    appUser,
    mentorships,
    users,
    getMentorships,
    getUsers,
  } = props;

  const [chosenFilter, setChosenFilter] = useState<string>('All');
  const router = useRouter();

  useEffect(() => {
    const formattedQuery = SearchMentorshipsRequest.extractDataFromQuery(
      router.query,
    );
    if (formattedQuery.category) {
      setChosenFilter(formattedQuery.category);
    }
    const searchMentorshipReq = SearchMentorshipsRequest.create(formattedQuery);
    getMentorships(searchMentorshipReq);
    const searchUsersReq = SearchUsersRequest.create();
    getUsers(searchUsersReq);
  }, []);

  const predefinedFilters = [
    'All',
    FilterCategories.SCHOOL,
    FilterCategories.FACULTY,
    FilterCategories.OTHER,
  ];

  const handlePredefinedFilter = (filterItem: string) => {
    setChosenFilter(filterItem);
    if (filterItem !== 'All') {
      const newPath: string = `${Context.BASE_PATH}/mentoring?category=${filterItem}`;
      router.push(newPath, newPath, {
        shallow: true,
      });
      const request: SearchMentorshipsRequest = {
        category: [filterItem],
      };
      getMentorships(request);
    } else {
      getMentorships({});
    }
  };

  const handleSendInquiry = (mentorId: string) => {
    const request: SendInquiryRequest = {
      mentorId,
    };
    // sendInquiry(request);
  };

  const displayedUser = (userId: string): string => {
    const foundUser: User | undefined = users.find(
      (item) => item.uid === userId,
    );
    return foundUser ? foundUser.username : '';
  };

  const getUserProfilePic = (userId: string): string => {
    const foundUser: User | undefined = users.find(
      (item) => item.uid === userId,
    );
    return foundUser && foundUser.photoUrl ? foundUser.photoUrl : '';
  };

  return (
    <StyledMentoringPage>
      <StyledMentoringOwnerTitle>
        Inspire others, get inspired
      </StyledMentoringOwnerTitle>
      <StyledFiltersBar>
        {predefinedFilters.map((filterItem, index) => (
          <StyledFilterItem
            key={`filter-item-${index}`}
            active={chosenFilter === filterItem}
            onClick={() => handlePredefinedFilter(filterItem)}
          >
            {filterItem}
          </StyledFilterItem>
        ))}
      </StyledFiltersBar>
      <StyledMentoringOffers>
        {mentorships
          .filter(
            (mentorship: Mentorship) => mentorship.mentorId !== appUser.uid,
          )
          .map((mentorship, index) => (
            <StyledMentoringCard key={`mentorship-card-${index}`}>
              <Link
                href={`${Context.BASE_PATH}/profiles/[id]`}
                as={`${Context.BASE_PATH}/profiles/${mentorship.mentorId}`}
              >
                <StyledMentoringCardUserDiv>
                  <StyledMentoringUserProfilePic
                    imgSrc={getUserProfilePic(mentorship.mentorId)}
                    role="img"
                  />
                  <StyledMentoringUsername>
                    {displayedUser(mentorship.mentorId)}
                  </StyledMentoringUsername>
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
                <Media
                  queries={{
                    mobile: `(max-width: 767px)`,
                    tablet: `(min-width: 768px)`,
                  }}
                >
                  {(matches) =>
                    !matches.mobile &&
                    matches.tablet && (
                      <Button
                        variant="contained"
                        onClick={() => handleSendInquiry(mentorship.mentorId)}
                      >
                        ASK DETAILS
                      </Button>
                    )
                  }
                </Media>
              </StyledMentoringCardBodyDiv>
              <Media
                queries={{
                  mobile: `(max-width: 767px)`,
                  tablet: `(min-width: 768px)`,
                }}
              >
                {(matches) =>
                  matches.mobile &&
                  !matches.tablet && (
                    <Button
                      variant="contained"
                      onClick={() => handleSendInquiry(mentorship.mentorId)}
                    >
                      ASK DETAILS
                    </Button>
                  )
                }
              </Media>
            </StyledMentoringCard>
          ))}
      </StyledMentoringOffers>
    </StyledMentoringPage>
  );
};

export { MentoringPage };
