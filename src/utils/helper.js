import moment from 'moment';
import R from 'ramda';

export function isNull(data) {
  if (R.isNil(data) || R.isEmpty(data)) {
    return true;
  } else {
    false;
  }
}

export function convertDate(date, oldFormat, newFormat) {
  if (isNull(date) || date === 'Unknown') {
    return 'Unknown';
  }

  if (date === '-') {
    return '-';
  }

  return moment(date, oldFormat).format(newFormat);
}
