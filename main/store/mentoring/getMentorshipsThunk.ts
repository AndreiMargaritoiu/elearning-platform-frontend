import { Dispatch } from 'redux';

import { Result, resultFormatter } from '../../domain/Result';
import { Context } from '../../Context';
import {
  getMentorshipsAction,
  getMentorshipsErrorAction,
  getMentorshipsSuccessAction,
} from './mentorshipActions';
import { Mentorship } from '../../domain/Mentorship';

export const getMentorshipsThunk = () => async (
  dispatch: Dispatch,
): Promise<Result<void, string>> => {
  try {
    dispatch(getMentorshipsAction());

    const mentorships: Mentorship[] = await Context.apiService.getMentorships();

    dispatch(getMentorshipsSuccessAction(mentorships));

    return resultFormatter.ok<void, string>();
  } catch (e) {
    dispatch(getMentorshipsErrorAction(e));
    return resultFormatter.error<void, string>(e);
  }
};
