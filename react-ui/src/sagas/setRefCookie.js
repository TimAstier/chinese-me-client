import getCookie from '../utils/getCookie';
import { put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { AFFILIATE_CODE_COOKIE_NAME } from '../constants/urls';

const ONE_YEAR = 365 * 24 * 3600 * 1000;

function getParameterByName(name, url) {
  const trimedName = name.replace(/[\[\]]/g, '\\$&'); // eslint-disable-line no-useless-escape
  const regex = new RegExp('[?&]' + trimedName + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function* setRefCookie() {
  const url = window.location.href;
  const cookie = getCookie(AFFILIATE_CODE_COOKIE_NAME);
  const refValue = getParameterByName('ref', url);
  // Don't modify rel cookie if set already
  if (!cookie) {
    // Add a cookie when visiting Homepage with a 'ref' query string
    if (refValue) {
      document.cookie = `cm_ref=${refValue};expires=${new Date(Date.now() + ONE_YEAR)}`;
    }
  }
  if (refValue) {
    yield put(replace('/'));
  }
}

export default setRefCookie;
