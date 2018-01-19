import { put, select, call } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as videoActions } from '../../redux/video';
import { fetchEntities } from '../entities';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentCharacterId(id));
  const currentElement = yield select(selectors.getCurrentCharacter);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/characters']);
  // TODO: handle fetch error
}

export function* checkData() {
  const currentElement = yield select(selectors.getCurrentCharacter);
  return currentElement.calligraphyHash ? true : false;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run() {
  yield put(videoActions.autoPlayOn());
}

// export function* nextScreen() {}

// export function* clean() {}
