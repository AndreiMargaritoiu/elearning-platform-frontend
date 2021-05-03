import moment from 'moment-timezone';
import { DateService } from '../domain/DateService';

const defaultTimezone = 'US/Eastern';

export class MomentService implements DateService {
  timestampToDate(timeStamp: number): string {
    return `${moment(timeStamp)
      .tz(defaultTimezone)
      .format('MM/DD/YYYY HH:mm A')}`;
  }
}
