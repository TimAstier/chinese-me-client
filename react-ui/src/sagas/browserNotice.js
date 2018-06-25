import { put, take } from 'redux-saga/effects';
import { detect } from 'detect-browser';
import swal from 'sweetalert';
import { types as sagaTypes } from './actions';
import { actions as sagaActions } from './actions';

// Browser disclaimer for people not using Chrome
function* browserNotice() {
  while (true) {
    yield take(sagaTypes.DISPLAY_BROWSER_NOTICE);
    // Only once
    if (localStorage.getItem('browserNotice') !== 'false') {
      const browser = detect();
      const isFacebookApp = () => {
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        return (ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1);
      };
      if (browser) {
        if (browser.name !== 'chrome' || isFacebookApp()) {
          yield put(sagaActions.sawNoticePopup('browser_not_supported'));
          swal({
            title: 'Web browser not supported',
            text: 'For now, our interactive course only works properly on the Chrome web browser, on a computer.\n\nWe noticed you are using another web browser. Please consider using Chrome as we otherwise cannot guarantee a satisfying learning experience for you.\n\nIf you don\'t have Chrome already, you can download it here: https://www.google.com/chrome/\n\nThanks for your understanding!',
            icon: 'warning',
            button: 'Got it!'
          }).then(() => {
            localStorage.setItem('browserNotice', false);
          });
        }
      }
    }
  }
}

export default browserNotice;
