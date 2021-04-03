import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  updateMentorshipAction,
  updateMentorshipErrorAction,
  updateMentorshipSuccessAction,
} from './mentorshipActions';
import { Mentorship, UpdateMentorshipRequest } from '../../domain/Mentorship';

export const updateMentorshipThunk = (
  mentorshipId: string,
  request: UpdateMentorshipRequest,
) => async (dispatch: Dispatch): Promise<Result<void, string>> => {
  try {
    dispatch(updateMentorshipAction());

    const mentorship: Mentorship = await Context.apiService.updateMentorship(
      mentorshipId,
      request,
    );

    dispatch(updateMentorshipSuccessAction(mentorship));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(updateMentorshipErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
