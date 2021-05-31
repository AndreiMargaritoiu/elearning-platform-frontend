import { Context } from '../Context';
import { auth } from '../services/Firebase';

export const setAuthTokenOnRefresh = async () => {
  if (auth.currentUser) {
    const token: string = await auth.currentUser.getIdToken();
    Context.apiService.setAuthToken(token);
  }
};
