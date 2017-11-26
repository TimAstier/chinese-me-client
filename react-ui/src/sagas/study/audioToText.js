import { put, select, take, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as audioToTextActions } from '../../redux/audioToText';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { Map } from 'immutable';
import { fetchEntities } from '../entities';
import { actions as audioActions } from '../../redux/audio';
import { actions as practiceActions } from '../../redux/practice';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentAudioToTextId(id));
  const initialized = yield select(selectors.practice.getInitialized);
  if (!initialized) {
    return false;
  }
  const currentElement = yield select(selectors.getCurrentAudioToText);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/audioToTexts']);
  // TODO: handle fetch error
}

export function checkData() {
  return true;
}

export function* initStudyData() {
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
  const words = yield select(selectors.entities.getWords);
  for (let i = 0; i < wordIds.length; i++) {
    const word = words.get(String(wordIds[i]));
    yield put(audioToTextActions.setCurrentBoxIndex(i));
    yield take(sagaTypes.CHECK_ANSWER);
    const userAnswer = yield select(selectors.audioToText.getUserAnswer);
    const success = word.get('pinyin') === userAnswer.replace(/\s+/g, '');
    if (!success) {
      yield put(sagaActions.playWrongSound());
      // In exam, skip the end if the user makes one mistake
      // Tracking
      const prematureResults = yield select(selectors.audioToText.getResults);
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
  const questionSuccess = yield select(selectors.audioToText.getSuccess);
  yield put(uiActions.set('playAudioButton', false));
  // Tracking
  const results = yield select(selectors.audioToText.getResults);
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
    yield put(practiceActions.setInitialized(false));
    return yield put(practiceActions.correctAnswer());
  }
  yield put(audioToTextActions.setStatus('finished'));
  yield put(uiActions.set('nextButton', true));
  if (mode === 'practice') {
    yield take(sagaTypes.NEXT_QUESTION);
    yield put(practiceActions.setInitialized(false));
    return yield put(practiceActions.wrongAnswer());
  }
  return yield take(sagaTypes.NEXT);
}

// export function* nextScreen() {}

// export function* clean() {}
