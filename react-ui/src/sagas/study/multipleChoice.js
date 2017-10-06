import { put, select, call, take } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { fetchEntities } from '../entities';
import { actions as multipleChoiceActions } from '../../redux/multipleChoice';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as fromUi } from '../../redux/ui';
import { actions as reviewActions } from '../../redux/review';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentMultipleChoiceId(id));
  const initialized = yield select(selectors.getReviewInitialized);
  if (!initialized) {
    return false;
  }
  const currentElement = yield select(selectors.getCurrentMultipleChoice);
  return (currentElement === undefined) ? false : true;
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

export function* initStudyData() {
  yield put(multipleChoiceActions.init());
}

export function* initUi() {}

export function* run(mode = 'normal') {
  const multipleChoice = yield select(selectors.getCurrentMultipleChoice);
  yield take(sagaTypes.CHECK_ANSWER);
  yield put(fromUi.set('skipButton', false));
  const userAnswer = yield select(selectors.getMultipleChoiceUserAnswer);
  if (multipleChoice.get('correctAnswer') === userAnswer) {
    yield put(sagaActions.playSuccessSound());
    yield put(multipleChoiceActions.setStatus('correct'));
    if (mode === 'exam') {
      return true;
    }
  } else {
    yield put(sagaActions.playWrongSound());
    yield put(multipleChoiceActions.setStatus('wrong'));
    if (mode === 'exam') {
      return false;
    }
  }
  yield put(fromUi.set('nextButton', true));
  return yield take(sagaTypes.NEXT);
}

// export function* clean() {}
