import { put, select } from 'redux-saga/effects';
import { actions as uiActions } from '../../redux/ui';
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

// export function* run() {}

// export function* clean() {}
