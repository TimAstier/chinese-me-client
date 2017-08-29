import { put, select, call, take, fork } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { fetchEntities } from '../entities';
import { actions as multipleChoiceActions } from '../../redux/multipleChoice';
import { types as sagaTypes } from '../actions';
import { actions as fromUi } from '../../redux/ui';
import { playSuccessSound, playWrongSound } from '../audio';

export function* checkData(id) {
  yield put(studyActions.setCurrentMultipleChoiceId(id));
  const currentElement = yield select(selectors.getCurrentMultipleChoice);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, '/episode/' + episodeId + '/multipleChoices');
  // TODO: handle fetch error
}

export function* initStudyData() {
  yield put(multipleChoiceActions.init());
}

export function* initUi() {}

export function* run() {
  const multipleChoice = yield select(selectors.getCurrentMultipleChoice);
  yield take(sagaTypes.CHECK_ANSWER);
  yield put(fromUi.set('skipButton', false));
  const userAnswer = yield select(selectors.getMultipleChoiceUserAnswer);
  // TODO: update Review reducer (remaining questions?)
  if (multipleChoice.get('correctAnswer') === userAnswer) {
    yield fork(playSuccessSound);
    yield put(multipleChoiceActions.setStatus('correct'));
  } else {
    yield fork(playWrongSound);
    yield put(multipleChoiceActions.setStatus('wrong'));
  }
  yield put(fromUi.set('nextButton', true));
  yield take(sagaTypes.NEXT);
}
