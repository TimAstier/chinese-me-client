import { put, select, take } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as multipleChoiceActions } from '../../redux/multipleChoice';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as uiActions } from '../../redux/ui';
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

export function* fetchData() {
  // TODO: review this to fetch data individually if necessary
  // yield call(fetchEntities, ['/episode/' + episodeId + '/review']);
  // // TODO: handle fetch error
  // const reviews = yield select(selectors.getReviews);
  // const exercises = reviews.getIn([episodeId, 'exercises']);
  // yield put(reviewActions.setExercises(exercises));
  // yield put(reviewActions.setInitialized(true));
}

export function checkData() {
  return true;
}

export function* initStudyData() {
  yield put(multipleChoiceActions.init());
}

export function* initUi() {
  yield put(uiActions.set('skipButton', false));
}

export function* run(mode) {
  let success = null;
  const multipleChoice = yield select(selectors.getCurrentMultipleChoice);
  yield take(sagaTypes.CHECK_ANSWER);
  const userAnswer = yield select(selectors.getMultipleChoiceUserAnswer);
  if (multipleChoice.get('correctAnswer') === userAnswer) {
    yield put(sagaActions.playSuccessSound());
    yield put(multipleChoiceActions.setStatus('correct'));
    if (mode === 'exam') {
      return true;
    }
    success = true;
  } else {
    yield put(sagaActions.playWrongSound());
    yield put(multipleChoiceActions.setStatus('wrong'));
    if (mode === 'exam') {
      return false;
    }
    success = false;
  }
  yield put(uiActions.set('nextButton', true));
  if (mode === 'review') {
    yield take(sagaTypes.NEXT_QUESTION);
    yield put(reviewActions.setInitialized(false));
    return yield put(success ? reviewActions.correctAnswer() : reviewActions.wrongAnswer());
  }
  return yield take(sagaTypes.NEXT);
}

// export function* clean() {}
