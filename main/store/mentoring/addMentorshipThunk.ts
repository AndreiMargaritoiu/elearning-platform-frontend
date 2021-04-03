import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  addMentorshipAction,
  addMentorshipErrorAction,
  addMentorshipSuccessAction,
} from './mentorshipActions';
import { AddMentorshipRequest, Mentorship } from '../../domain/Mentorship';

export const addMentorshipThunk = (request: AddMentorshipRequest) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(addMentorshipAction());

    const mentorship: Mentorship = await Context.apiService.addMentorship(
      request,
    );

    dispatch(addMentorshipSuccessAction(mentorship));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(addMentorshipErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
