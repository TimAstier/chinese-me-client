import { put, select, call, take, fork } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { fetchEntities } from '../entities';
import { actions as audioToTextActions } from '../../redux/audioToText';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as fromUi } from '../../redux/ui';
import { Map } from 'immutable';
import { actions as fromAudio } from '../../redux/audio';
import { actions as reviewActions } from '../../redux/review';
import { playSuccessSound, playWrongSound } from '../audio';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentAudioToTextId(id));
  const initialized = yield select(selectors.getReviewInitialized);
  if (!initialized) {
    return false;
  }
  const currentElement = yield select(selectors.getCurrentAudioToText);
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
  yield put(fromUi.set('skipButton', true));
  yield put(fromUi.set('playAudioButton', true));
}

export function* initUi() {
  yield put(audioToTextActions.init());
}

export function* run() {
  const currentAudioToText = yield select(selectors.getCurrentAudioToText);
  yield put(fromAudio.set('audioUrl', currentAudioToText.audioUrl));
  yield put(sagaActions.playAudio());
  const wordIds = currentAudioToText.words;
  const words = yield select(selectors.getWords);
  for (let i = 0; i < wordIds.length; i++) {
    const word = words.get(String(wordIds[i]));
    yield put(audioToTextActions.setCurrentBoxIndex(i));
    yield take(sagaTypes.CHECK_ANSWER);
    const userAnswer = yield select(selectors.getAudioToTextUserAnswer);
    const success = word.get('pinyin') === userAnswer;
    if (!success) {
      yield fork(playWrongSound);
    }
    yield put(audioToTextActions.addResult(Map({ success, userAnswer })));
    yield put(audioToTextActions.setUserAnswer(''));
  }
  const questionSuccess = yield select(selectors.getAudioToTextSuccess);
  if (questionSuccess) {
    yield put(reviewActions.correctAnswer());
    yield fork(playSuccessSound);
  } else {
    yield put(reviewActions.wrongAnswer());
  }
  yield put(audioToTextActions.setStatus('finished'));
  yield put(fromUi.set('nextButton', true));
  yield take(sagaTypes.NEXT);
}

// export function* clean() {}
