import getCookie from '../utils/getCookie';
import { call } from 'redux-saga/effects';
import Api from '../utils/api';

function* handleAffiliate(isAuthenticated, settings) {
  // const isAuthenticated = params[0];
  // const settings = params[1];
  const rel = getCookie('cm_rel');
  // Check if there is a 'rel' cookie (set from the homepage)
  if (!rel) {
    return null;
  }
  if (!isAuthenticated) {
    return null;
  }
  // Do not save 'rel' value if alredy set
  if (settings.rel) {
    return null;
  }
  // Save 'rel' in DB
  try {
    yield call(Api.put, '/users', { rel });
  } catch (error) {
    // TODO: handle error
    console.log(error);
  }
}

export default handleAffiliate;
