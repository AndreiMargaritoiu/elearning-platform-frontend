import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@material-ui/core';
import React, { FC, useState } from 'react';
import { SweetAlertResult } from 'sweetalert2';
import { Context } from '../../Context';

import { FilterCategories } from '../../domain/FilterCategories';
import { AddMentorshipRequest } from '../../domain/Mentorship';
import {
  StyledAddContentContainer,
  StyledAddContentSectionTitle,
} from './AddContentStyles';

export interface AddMentorshipPageProps {
  addMentorship(request: AddMentorshipRequest): any;
}

const AddMentorshipPage: FC<AddMentorshipPageProps> = (props) => {
  const { addMentorship } = props;

  const [newMentorship, setNewMentorship] = useState<AddMentorshipRequest>({
    description: '',
    price: 0,
    category: FilterCategories.SCHOOL,
  });

  const isAddDisabled: boolean = newMentorship.description.trim().length === 0;

  const handleAddMentorship = async () => {
    const res = await addMentorship(newMentorship);
    if (res.isOk) {
      const result: SweetAlertResult = await Context.alertService.fire({
        text: 'Mentorship has been added successfully',
      });

      if (!result.dismiss) {
        setNewMentorship({
          description: '',
          price: 0,
          category: FilterCategories.SCHOOL,
        });
      }
    } else {
      await Context.alertService.fire({
        text: 'An error has occured',
      });
    }
  };

  return (
    <StyledAddContentContainer>
      <StyledAddContentSectionTitle>Mentorship</StyledAddContentSectionTitle>
      <FormControl variant="outlined" className="text-field">
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
      <FormControl variant="outlined" className="text-field">
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
      <FormControl variant="outlined" className="text-field">
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={newMentorship.category}
          label="Category"
          onChange={(event: any) => {
            setNewMentorship({
              ...newMentorship,
              category: event.target.value,
            });
          }}
        >
          <MenuItem value={FilterCategories.SCHOOL}>
            {FilterCategories.SCHOOL}
          </MenuItem>
          <MenuItem value={FilterCategories.FACULTY}>
            {FilterCategories.FACULTY}
          </MenuItem>
          <MenuItem value={FilterCategories.OTHER}>
            {FilterCategories.OTHER}
          </MenuItem>
        </Select>
      </FormControl>
      <Button
        className={`add-button ${isAddDisabled ? 'disabled' : ''}`}
        disabled={isAddDisabled}
        onClick={handleAddMentorship}
      >
        ADD
      </Button>
    </StyledAddContentContainer>
  );
};

export { AddMentorshipPage };
