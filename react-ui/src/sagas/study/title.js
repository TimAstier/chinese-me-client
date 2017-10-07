import { put, select, call } from 'redux-saga/effects';
import { actions as uiActions } from '../../redux/ui';
import selectors from '../../rootSelectors';
// import { actions as reviewActions } from '../../redux/review';
import { actions as examActions } from '../../redux/exam';
import { fetchEntities } from '../entities';

export function* isDataLoaded() {
  const currentUrl = yield select(selectors.getCurrentUrl);
  const partNumber = currentUrl.split('/')[4];
  if (partNumber === '4') { // Review
    // const initialized = yield select(selectors.getReviewInitialized);
    // return initialized;
  }
  if (partNumber === '5') { // Exam
    return false;
  }
  return true;
}

export function* fetchData(episodeId) {
  const currentUrl = yield select(selectors.getCurrentUrl);
  const partNumber = currentUrl.split('/')[4];
  if (partNumber === '4') {
    // yield call(fetchEntities, ['/episode/' + episodeId + '/review']);
    // // TODO: handle fetch error
    // const reviews = yield select(selectors.getReviews);
    // const exercises = reviews.getIn([episodeId, 'exercises']);
    // yield put(reviewActions.setExercises(exercises));
    // yield put(reviewActions.setInitialized(true));
  } else if (partNumber === '5') { // Exam
    // Fetch exercise entities, then store exercises array in Exam state slice
    yield call(fetchEntities, [
      '/episode/' + episodeId + '/exam',
      function* cb(response) {
        yield put(
          examActions.setExercises(response.data.data.attributes.exercises)
        );
      }
    ]);
    // TODO: handle fetch error
  }
}

export function checkData() {
  return true;
}

export function* initUi() {
  yield put(uiActions.set('skipButton', false));
  yield put(uiActions.set('nextButton', true));
}

export function* initStudyData() {}

// export function* run() {}

// export function* clean() {}
