import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import React, { FC, useState } from 'react';
import {
  AddMentorshipRequest,
  FilterCategories,
} from '../../domain/Mentorship';
import { User } from '../../domain/User';
import { StyledAddContentContainer } from './AddContentStyles';

export interface AddMentorshipPageProps {
  appUser: User;
  addMentorship(request: AddMentorshipRequest): void;
}

const AddMentorshipPage: FC<AddMentorshipPageProps> = (props) => {
  const { appUser, addMentorship } = props;

  const [newMentorship, setNewMentorship] = useState<AddMentorshipRequest>({
    description: '',
    price: 0,
    category: FilterCategories.SCHOOL,
    mentorId: '',
    mentorEmail: '',
  });

  const handleAddMentorship = () => {
    const addMentroshipRequest: AddMentorshipRequest = {
      ...newMentorship,
      mentorId: appUser.uid,
      mentorEmail: appUser.email,
    };
    addMentorship(addMentroshipRequest);
  };

  return (
    <StyledAddContentContainer>
      <label>Mentorship</label>
      <FormControl
        variant="outlined"
        className="text-field qa-automation-admin-panel-first-name"
      >
        <InputLabel htmlFor="component-outlined">Description</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={newMentorship.description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewMentorship({
              ...newMentorship,
              description: event.target.value,
            })
          }
          label="Description"
        />
      </FormControl>
      <FormControl
        variant="outlined"
        className="text-field qa-automation-admin-panel-first-name"
      >
        <InputLabel htmlFor="component-outlined">Price</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={newMentorship.price}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewMentorship({
              ...newMentorship,
              price: parseInt(event.target.value, 10) || 0,
            })
          }
          label="Price"
          startAdornment={<InputAdornment position="start">€</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <Button onClick={handleAddMentorship}>ADD MENTORSHIP</Button>
    </StyledAddContentContainer>
  );
};

export { AddMentorshipPage };
