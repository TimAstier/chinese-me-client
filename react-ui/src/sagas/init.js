import { take, call, select, put } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { actions as studyActions } from '../redux/study';
import { actions as mapActions } from '../redux/map';
import { fetchEntities } from './entities';
import selectors from '../rootSelectors';
import { actions as appActions } from '../redux/app';
import { loadSettings } from './userSettings';
import getParamsFromUrl from '../utils/getParamsFromUrl';
import setRefCookie from './setRefCookie';
import trackRef from './trackRef';

// This is called only one time, when Study containers mounts
export function* initApp() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { isAuthenticated } } = yield take(sagaTypes.INIT_APP);
    const url = yield select(selectors.routing.getCurrentUrl);
    if (url === '/') { // look for a ref cookie on Homepage only
      yield call(setRefCookie);
    }
    yield call(fetchEntities, ['/seasons']);
    yield call(fetchEntities, ['/episodes']);
    const firstSeasonId = yield select(selectors.getFirstSeasonId);
    yield put(studyActions.setCurrentSeasonId(firstSeasonId));
    const { episodeId } = getParamsFromUrl(url);
    // TODO: Clean this
    // Workaround for book urls and static pages
    if (episodeId && episodeId !== 'season') {
      if (['help', 'privacy-policy', 'terms-of-service', 'about', 'philosophy', 'account', 'store', 'activated'].indexOf(episodeId ) === -1) {
        yield put(studyActions.setCurrentEpisodeId(episodeId));
        yield put(mapActions.setFocusedEpisodeId(episodeId));
      }
    }
    yield put(appActions.setInitialized(true));
    if (isAuthenticated) {
      const settings = yield call(loadSettings);
      yield call(trackRef, isAuthenticated, settings);
    }
  }
}

// Called after a practice or exam to update episode score
// Called after login and logout
export function* reloadApp() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(sagaTypes.RELOAD_APP);
    yield call(fetchEntities, ['/seasons']);
    yield call(fetchEntities, ['/episodes']);
  }
}
