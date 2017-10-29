import { put, select, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as audioToTextActions } from '../../redux/audioToText';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { Map } from 'immutable';
import { actions as audioActions } from '../../redux/audio';
import { actions as reviewActions } from '../../redux/review';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentAudioToTextId(id));
  const initialized = yield select(selectors.getReviewInitialized);
  if (!initialized) {
    return false;
  }
  const currentElement = yield select(selectors.getCurrentAudioToText);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData() {}

export function checkData() {
  return true;
}

export function* initStudyData() {
  yield put(uiActions.set('skipButton', false));
  yield put(uiActions.set('playAudioButton', true));
}

export function* initUi() {
  yield put(audioToTextActions.init());
}

export function* run(mode = 'free') {
  const currentAudioToText = yield select(selectors.getCurrentAudioToText);
  yield put(audioActions.set('audioUrl', currentAudioToText.audioUrl));
  yield put(sagaActions.playAudio());
  const wordIds = currentAudioToText.words;
  const words = yield select(selectors.getWords);
  for (let i = 0; i < wordIds.length; i++) {
    const word = words.get(String(wordIds[i]));
    yield put(audioToTextActions.setCurrentBoxIndex(i));
    yield take(sagaTypes.CHECK_ANSWER);
    const userAnswer = yield select(selectors.getAudioToTextUserAnswer);
    const success = word.get('pinyin') === userAnswer.replace(/\s+/g, '');
    if (!success) {
      yield put(sagaActions.playWrongSound());
      // In exam, skip the end if the user makes one mistake
      // Tracking
      const prematureResults = yield select(selectors.getAudioToTextResults);
      yield put(sagaActions.exerciseCompleted({
        id: currentAudioToText.get('id'),
        type: 'audioToText',
        mode,
        success: false,
        results: prematureResults.toJS()
      }));
      // End Tracking
      if (mode === 'exam') {
        return false;
      }
    }
    yield put(audioToTextActions.addResult(Map({ success, userAnswer })));
    yield put(audioToTextActions.setUserAnswer(''));
  }
  const questionSuccess = yield select(selectors.getAudioToTextSuccess);
  yield put(uiActions.set('playAudioButton', false));
  // Tracking
  const results = yield select(selectors.getAudioToTextResults);
  yield put(sagaActions.exerciseCompleted({
    id: currentAudioToText.get('id'),
    type: 'audioToText',
    mode,
    success: questionSuccess,
    results: results.toJS()
  }));
  // End Tracking
  if (questionSuccess) {
    yield put(sagaActions.playSuccessSound());
    if (mode === 'exam') {
      return true;
    }
    yield put(audioToTextActions.setStatus('finished'));
    yield delay(1000);
    yield put(reviewActions.setInitialized(false));
    return yield put(reviewActions.correctAnswer());
  }
  yield put(audioToTextActions.setStatus('finished'));
  yield put(uiActions.set('nextButton', true));
  if (mode === 'review') {
    yield take(sagaTypes.NEXT_QUESTION);
    yield put(reviewActions.setInitialized(false));
    return yield put(reviewActions.wrongAnswer());
  }
  return yield take(sagaTypes.NEXT);
}

// export function* clean() {}
