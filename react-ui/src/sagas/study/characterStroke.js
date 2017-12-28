import { put, take, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
// import { types as uiTypes } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { types as sagaTypes } from '../actions';
import { fetchEntities } from '../entities';
import { actions as sagaActions } from '../actions';
import { actions as uiActions } from '../../redux/ui';
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

export function checkData() {
  // NOTE: we currently fetch hanziData from an online api
  // const currentElement = yield select(selectors.getCurrentCharacter);
  // return currentElement.hanziData ? true : false;
  return true;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run(isExam = false) {
  // There is currently no way to fail this exercise
  const result = { isCorrect: true };
  if (!isExam) {
    yield put(uiActions.set('hanziAgainButton', true));
  }
  yield take(sagaTypes.STROKE_QUIZ_COMPLETED);
  yield put(sagaActions.playSuccessSound());
  if (isExam) {
    return result;
  }
  yield put(uiActions.set('hanziAgainButton', false));
  yield delay(1000);
  return result;
}

export function* nextScreen() {
  const url = yield select(selectors.getCurrentBookUrl);
  yield put(push(url));
}

// export function* clean() {}
