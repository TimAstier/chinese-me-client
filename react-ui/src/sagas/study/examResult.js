import { put, select, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { actions as examActions } from '../../redux/exam';
import selectors from '../../rootSelectors';

export function isDataLoaded() {
  return true;
}

// export function* fetchData() {}

export function* checkData() {
  const completed = yield select(selectors.getExamCompleted);
  return completed;
}

export function* initUi() {
  yield put(uiActions.set('skipButton', false));
  yield put(uiActions.set('nextButton', true));
}

export function* initStudyData() {}

export function* run() {
  const score = yield select(selectors.getExamScore);
  yield delay(1000);
  yield put(score >= 7 ? sagaActions.playLevelWinSound() : sagaActions.playLevelFailSound());
  yield take(sagaTypes.NEXT);
}

export function* clean() {
  yield put(examActions.clean());
}
