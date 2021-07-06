import Modal from 'react-modal';
import React from 'react';
import { Button } from '@material-ui/core';

import { UpdateUserRequest, User } from '../../../domain/User';
import {
  FollowingCard,
  FollowingModalBodyContainer,
  FollowingModalContainer,
  FollowingModalHeaderContainer,
  modalStyles,
  StyledFollowingProfileImage,
} from './FollowingListModalStyles';

export interface FollowingListModalState {
  isOpen: boolean;
}

export interface FollowingListModalProps {
  modalState: FollowingListModalState;
  followingList: User[];
  appUser: User;
  setModalState: (setOpenState: FollowingListModalState) => void;
  updateAppUser(userId: string, request: UpdateUserRequest): void;
}

export const FollowingListModal: React.FC<FollowingListModalProps> = (
  props: FollowingListModalProps,
) => {
  const {
    modalState,
    followingList,
    appUser,
    setModalState,
    updateAppUser,
  } = props;
  const { isOpen } = modalState;

  const handleFollowButton = (currentUserId: string) => {
    const followedIds: string[] = appUser.following.includes(currentUserId)
      ? appUser.following.filter((item) => item !== currentUserId)
      : [...appUser.following, currentUserId];
    const updateAppUserReqest: UpdateUserRequest = {
      following: followedIds,
    };
    updateAppUser(appUser.uid, updateAppUserReqest);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() =>
        setModalState({
          ...modalState,
          isOpen: false,
        })
      }
      style={modalStyles}
      ariaHideApp={false}
    >
      <FollowingModalContainer>
        <FollowingModalHeaderContainer>Following</FollowingModalHeaderContainer>
        <FollowingModalBodyContainer>
          {followingList.map((item, index) => (
            <FollowingCard key={`following-card-${index}`}>
              <StyledFollowingProfileImage
                imgSrc={item.photoUrl || ''}
                role="img"
              />
              <label>{item.username}</label>
              {appUser.uid !== item.uid && (
                <Button
                  className="follow-button"
                  onClick={() => handleFollowButton(item.uid)}
                >
                  {appUser.following.includes(item.uid) ? 'UNFOLLOW' : 'FOLLOW'}
                </Button>
              )}
            </FollowingCard>
          ))}
        </FollowingModalBodyContainer>
      </FollowingModalContainer>
    </Modal>
  );
};
