import { put, take, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
// import { types as uiTypes } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { types as sagaTypes } from '../actions';
import { fetchEntities } from '../entities';
import { actions as sagaActions } from '../actions';
import { actions as reviewActions } from '../../redux/review';
import { actions as uiActions } from '../../redux/ui';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentCharacterId(id));
  const currentElement = yield select(selectors.getCurrentCharacter);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  console.log('fetch!')
  return yield call(fetchEntities, ['/episode/' + episodeId + '/characters']);
  // TODO: handle fetch error
}

export function* checkData() {
  const currentElement = yield select(selectors.getCurrentCharacter);
  return currentElement.hanziData ? true : false;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run(mode = 'free') {
  if (mode !== 'exam') {
    yield put(uiActions.set('hanziAgainButton', true));
  }
  yield take(sagaTypes.STROKE_QUIZ_COMPLETED);
  yield put(sagaActions.playSuccessSound());
  if (mode === 'exam') {
    return true;
  }
  yield put(uiActions.set('hanziAgainButton', false));
  if (mode === 'review') {
    yield delay(1000);
    yield put(reviewActions.setInitialized(false));
    return yield put(reviewActions.correctAnswer());
  }
  return yield delay(1000);
}

// export function* clean() {}
