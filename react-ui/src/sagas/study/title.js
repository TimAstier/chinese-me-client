import { put, select, call } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';
import { actions as fromStudy } from '../../redux/study';
import selectors from '../../rootSelectors';
import { actions as reviewActions } from '../../redux/review';
import { fetchEntities } from '../entities';

export function* isDataLoaded(id) {
  if (id === '4') { // Review
    const initialized = yield select(selectors.getReviewInitialized);
    return initialized;
  }
  return true;
}

export function* fetchData(episodeId) {
  yield call(fetchEntities, ['/episode/' + episodeId + '/review']);
  // TODO: handle fetch error
  const reviews = yield select(selectors.getReviews);
  const exercises = reviews.getIn([episodeId, 'exercises']);
  yield put(reviewActions.setExercises(exercises));
  yield put(reviewActions.setInitialized(true));
}

export function checkData() {
  return true;
}

export function* initUi() {
  yield put(fromUi.set('skipButton', false));
  yield put(fromUi.set('nextButton', true));
}

export function* initStudyData() {
  const url = yield select(selectors.getCurrentUrl);
  const partNumber = url.split('/')[4];
  yield put(fromStudy.setPartNumber(Number(partNumber)));
}

// export function* run() {}
