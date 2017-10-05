import { put, select, call } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';
import { actions as fromStudy } from '../../redux/study';
import selectors from '../../rootSelectors';
import { actions as reviewActions } from '../../redux/review';
import { fetchEntities } from '../entities';

export function* isDataLoaded() {
  const currentUrl = yield select(selectors.getCurrentUrl);
  const partNumber = currentUrl.split('/')[4];
  if (partNumber === '4') { // Review
    const initialized = yield select(selectors.getReviewInitialized);
    return initialized;
  }
  if (partNumber === '5') { // Exam
    const initialized = yield select(selectors.getExamInitialized);
    return initialized;
  }
  return true;
}

export function* fetchData(episodeId) {
  const currentUrl = yield select(selectors.getCurrentUrl);
  const partNumber = currentUrl.split('/')[4];
  if (partNumber === '4') {
    yield call(fetchEntities, ['/episode/' + episodeId + '/review']);
    // TODO: handle fetch error
    const reviews = yield select(selectors.getReviews);
    const exercises = reviews.getIn([episodeId, 'exercises']);
    yield put(reviewActions.setExercises(exercises));
    yield put(reviewActions.setInitialized(true));
  } else if (partNumber === '5') {
    yield call(fetchEntities, ['/episode/' + episodeId + '/exam']);
    // TODO: handle fetch error
  }
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
