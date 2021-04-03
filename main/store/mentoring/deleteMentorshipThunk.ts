import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  deleteMentorshipAction,
  deleteMentorshipErrorAction,
  deleteMentorshipSuccessAction,
} from './mentorshipActions';

export const deleteMentorshipThunk = (mentorshipId: string) => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(deleteMentorshipAction());

    Context.apiService.deleteMentorship(mentorshipId);

    dispatch(deleteMentorshipSuccessAction(mentorshipId));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(deleteMentorshipErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
