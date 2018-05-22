import getCookie from '../utils/getCookie';
import deleteCookie from '../utils/deleteCookie';
import { call } from 'redux-saga/effects';
import Api from '../utils/api';
import { AFFILIATE_CODE_COOKIE_NAME } from '../constants/urls';

function* trackRef(isAuthenticated, settings) {
  // const isAuthenticated = params[0];
  // const settings = params[1];
  const refCode = getCookie(AFFILIATE_CODE_COOKIE_NAME);
  // Check if there is a 'ref' cookie (set from the homepage)
  if (!refCode) {
    return null;
  }
  if (!isAuthenticated) {
    return null;
  }
  // Do not save 'refCode' if refCodeId alredy set
  if (settings.refCodeId) {
    return null;
  }
  // Save 'ref' in DB
  try {
    const response = yield call(Api.put, '/users/refCode', { value: refCode });
    if (response.status === 200) {
      deleteCookie(AFFILIATE_CODE_COOKIE_NAME);
    }
  } catch (error) {
    // TODO: handle error
    console.log(error);
  }
}

export default trackRef;
