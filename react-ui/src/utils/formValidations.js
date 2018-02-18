import moment from 'moment';

export const required = value => (value ? undefined : 'Required');

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const validDate = value => {
  const userDate = moment(value, 'DD-MM-YYYY');
  if (!value) {
    return 'Please input a date';
  }
  if (!userDate.isValid()) {
    return 'Please input a date in the format DD-MM-YYYY';
  }
  if (moment().diff(value, 'years') <= 0) {
    return 'Are you sure you\'re born in the future?';
  }
  if (moment().diff(value, 'years') > 150) {
    return 'Are you sure you are over 150 years old?';
  }
  return undefined;
};
