import moment from 'moment-timezone';
import { DateService } from '../domain/DateService';

const defaultTimezone = 'Europe/Bucharest';

export class MomentService implements DateService {
  timestampToDate(timeStamp: number): string {
    return `${moment(timeStamp)
      .tz(defaultTimezone)
      .format('MM/DD/YYYY HH:mm A')}`;
  }

  timestampToDatePicker(timeStamp: number): string {
    return `${moment(timeStamp)
      .tz(defaultTimezone)
      .format('YYYY-MM-DDTHH:mm')}`;
  }
}
