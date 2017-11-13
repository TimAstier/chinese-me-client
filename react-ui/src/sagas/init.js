import { take, call, select, put } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { actions as studyActions } from '../redux/study';
import { fetchEntities } from './entities';
import selectors from '../rootSelectors';
import { actions as appActions } from '../redux/app';
import { loadSettings } from './userData';
import getParamsFromUrl from '../utils/getParamsFromUrl';

// This is called only one time, when Study containers mounts
export function* initApp() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(sagaTypes.INIT_APP);
    yield call(fetchEntities, ['/seasons']);
    yield call(fetchEntities, ['/episodes']);
    const firstSeasonId = yield select(selectors.getFirstSeasonId);
    yield put(studyActions.setCurrentSeasonId(firstSeasonId));
    const url = yield select(selectors.routing.getCurrentUrl);
    const { episodeId } = getParamsFromUrl(url);
    if (episodeId) {
      yield put(studyActions.setCurrentEpisodeId(episodeId));
    }

    yield put(appActions.setInitialized(true));
    yield call(loadSettings);
  }
}

// Called after an exam to update episode status
export function* reloadApp() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(sagaTypes.RELOAD_APP);
    yield call(fetchEntities, ['/seasons']);
    yield call(fetchEntities, ['/episodes']);
  }
}
