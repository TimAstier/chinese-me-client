import { take, call, select, put } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { actions as studyActions } from '../redux/study';
import { actions as mapActions } from '../redux/map';
import { fetchEntities } from './entities';
import selectors from '../rootSelectors';
import { actions as appActions } from '../redux/app';
import { loadSettings } from './userSettings';
import getParamsFromUrl from '../utils/getParamsFromUrl';
import { detect } from 'detect-browser';
import swal from 'sweetalert';

// This is called only one time, when Study containers mounts
export function* initApp() {
  const browser = detect();
  const isFacebookApp = () => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1);
  };
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { isAuthenticated } } = yield take(sagaTypes.INIT_APP);
    yield call(fetchEntities, ['/seasons']);
    yield call(fetchEntities, ['/episodes']);
    const firstSeasonId = yield select(selectors.getFirstSeasonId);
    yield put(studyActions.setCurrentSeasonId(firstSeasonId));
    const url = yield select(selectors.routing.getCurrentUrl);
    const { episodeId } = getParamsFromUrl(url);
    // Workaround for book urls and static pages
    if (episodeId && episodeId !== 'season') {
      if (['help', 'privacy-policy', 'terms-of-service', 'about', 'philosophy', 'account'].indexOf(episodeId ) === -1) {
        yield put(studyActions.setCurrentEpisodeId(episodeId));
        yield put(mapActions.setFocusedEpisodeId(episodeId));
      }
    }
    yield put(appActions.setInitialized(true));
    if (isAuthenticated) {
      yield call(loadSettings);
    }
    // browser disclaimer for people not using Chrome
    if (browser && localStorage.getItem('browserNotice') !== 'false') {
      if (browser.name !== 'chrome' || isFacebookApp()) {
        swal({
          title: 'Web browser not supported',
          text: 'For now, ChineseMe only works properly on the Chrome web browser, on a computer.\n\nWe noticed you are using another web browser. Please consider using Chrome as we otherwise cannot guarantee a satisfying learning experience for you.\n\nIf you don\'t have Chrome already, you can download it here: https://www.google.com/chrome/\n\nThanks for your understanding!',
          icon: 'warning',
          button: 'Got it!'
        }).then(() => {
          localStorage.setItem('browserNotice', false);
        });
      }
    }
  }
}

// Called after a practice or exam to update episode score
export function* reloadApp() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(sagaTypes.RELOAD_APP);
    yield call(fetchEntities, ['/seasons']);
    yield call(fetchEntities, ['/episodes']);
  }
}
