import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Switch,
  TextField,
} from '@material-ui/core';
import React, { FC, useState } from 'react';

import { AddWorkshopRequest } from '../../domain/Workshop';
import {
  StyledAddContentContainer,
  StyledAddContentField,
  StyledAddContentRowField,
  StyledAddContentSectionTitle,
} from './AddContentStyles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { MomentService } from '../../services/MomentService';
import { storage } from '../../services/Firebase';
import { SweetAlertResult } from 'sweetalert2';
import { Context } from '../../Context';

export interface AddWorkshopPageProps {
  addWorkshop(request: AddWorkshopRequest): any;
}

const AddWorkshopPage: FC<AddWorkshopPageProps> = (props) => {
  const { addWorkshop } = props;

  const [newWorkshop, setNewWorkshop] = useState<AddWorkshopRequest>({
    description: '',
    tag: '',
    location: '',
    thumbnailUrl: '',
    capacity: 0,
    date: Date.now(),
    onlineEvent: true,
  });
  const [image, setImage] = useState<File | undefined>(undefined);

  const DateService = new MomentService();

  const isAddDisabled: boolean =
    newWorkshop.description.trim().length === 0 ||
    newWorkshop.tag.trim().length === 0 ||
    !image;

  const uploadFileAndGetURL = async (): Promise<any> => {
    if (image) {
      const fileRef = storage.ref(`/workshops/${image.name}`);
      await fileRef.put(image);
      const fileRefPath: string = await fileRef.getDownloadURL();
      return fileRefPath;
    }
    return '';
  };

  const handleAddWorkshop = async () => {
    const thumbnailUrl: string = await uploadFileAndGetURL();
    const addWorkshopRequest: AddWorkshopRequest = {
      ...newWorkshop,
      thumbnailUrl,
    };
    const res = await addWorkshop(addWorkshopRequest);
    if (res.isOk) {
      const result: SweetAlertResult = await Context.alertService.fire({
        text: 'Mentorship has been added successfully',
      });

      if (!result.dismiss) {
        setNewWorkshop({
          description: '',
          tag: '',
          location: '',
          thumbnailUrl: '',
          capacity: 0,
          date: Date.now(),
          onlineEvent: true,
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
      <StyledAddContentSectionTitle>Workshop</StyledAddContentSectionTitle>
      <FormControl variant="outlined" className="text-field">
        <InputLabel htmlFor="component-outlined">Description</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={newWorkshop.description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewWorkshop({
              ...newWorkshop,
              description: event.target.value,
            })
          }
          label="Description"
        />
      </FormControl>
      <FormControl variant="outlined" className="text-field">
        <InputLabel htmlFor="component-outlined">Tag</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={newWorkshop.tag}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewWorkshop({
              ...newWorkshop,
              tag: event.target.value,
            })
          }
          label="Tag"
          startAdornment={<InputAdornment position="start">#</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <FormControl variant="outlined" className="text-field">
        <InputLabel htmlFor="component-outlined">Location</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={newWorkshop.location}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewWorkshop({
              ...newWorkshop,
              location: event.target.value,
            })
          }
          label="Location"
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
      <FormControl variant="outlined" className="text-field">
        <InputLabel htmlFor="component-outlined">Capacity</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={newWorkshop.capacity || 0}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewWorkshop({
              ...newWorkshop,
              capacity: parseInt(event.target.value, 10),
            })
          }
          label="Capacity"
        />
      </FormControl>
      <TextField
        id="datetime-local"
        label="Date"
        type="datetime-local"
        className="text-field"
        defaultValue={DateService.timestampToDatePicker(Date.now())}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewWorkshop({
            ...newWorkshop,
            date: Date.parse(event.target.value),
          })
        }
      />
      <StyledAddContentRowField>
        <StyledAddContentField>Online event:</StyledAddContentField>
        <FormControl variant="outlined">
          <Switch
            checked={newWorkshop.onlineEvent}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNewWorkshop({
                ...newWorkshop,
                onlineEvent: event.target.checked,
              })
            }
            name="checkedA"
          />
        </FormControl>
      </StyledAddContentRowField>
      <StyledAddContentRowField>
        <StyledAddContentField className="margin-right">
          Thumbnail:
        </StyledAddContentField>
        <input
          type="file"
          accept="image/*"
          onChange={(e: any) => {
            setImage(e.target.files[0]);
          }}
        />
      </StyledAddContentRowField>
      <Button
        className={`add-button ${isAddDisabled ? 'disabled' : ''}`}
        disabled={isAddDisabled}
        onClick={handleAddWorkshop}
      >
        ADD
      </Button>
    </StyledAddContentContainer>
  );
};

export { AddWorkshopPage };
