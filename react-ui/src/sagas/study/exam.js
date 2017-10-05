import { put } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';

export function* isDataLoaded(id) {
  // id is undefined since there is no element
  return true;
}

export function* fetchData(episodeId) {}

export function checkData() {
  return true;
}

export function* initUi() {
  yield put(fromUi.set('skipButton', false));
  yield put(fromUi.set('nextButton', true));
}

export function* initStudyData() {}

// export function* run() {}
