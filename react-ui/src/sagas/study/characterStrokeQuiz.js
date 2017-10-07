import { put, take, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
// import { types as uiTypes } from '../../redux/ui';
import { actions as fromUi } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { actions as fromStudy } from '../../redux/study';
import { types as sagaTypes } from '../actions';
import { fetchEntities } from '../entities';
import { actions as sagaActions } from '../actions';

export function* isDataLoaded(id) {
  yield put(fromStudy.setCurrentCharacterId(id));
  const currentElement = yield select(selectors.getCurrentCharacter);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/characters']);
  // TODO: handle fetch error
}

export function* checkData() {
  const currentElement = yield select(selectors.getCurrentCharacter);
  return currentElement.hanziData ? true : false;
}

export function* initStudyData() {}

export function* initUi() {
  yield put(fromUi.set('skipButton', true));
  yield put(fromUi.set('againButton', true));
  yield put(fromUi.closeModal());
}

export function* run() {
  yield take(sagaTypes.STROKE_QUIZ_COMPLETED);
  yield put(sagaActions.playSuccessSound());
  yield delay(1000);
}

// export function* clean() {}
