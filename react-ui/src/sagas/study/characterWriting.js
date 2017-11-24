import { put, select, call, take } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as videoActions } from '../../redux/video';
import { actions as uiActions } from '../../redux/ui';
import { fetchEntities } from '../entities';
import { types as sagaTypes } from '../actions';
import { push } from 'react-router-redux';

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
  return currentElement.writingUrl ? true : false;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run() {
  yield put(videoActions.autoPlayOn());
  yield take(sagaTypes.VIDEO_ENDED);
  yield put(uiActions.set('nextButton', true));
  return yield take(sagaTypes.NEXT);
}

export function* nextScreen() {
  const url = yield select(selectors.getCurrentBookUrl);
  yield put(push(url));
}

// export function* clean() {}
