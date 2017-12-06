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

const trim = string => {
  return string.replace(/\s+/g, '').toLowerCase();
};

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

export function* run(isExam = false) {
  let result;
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
    const success = trim(word.get('pinyin')) === trim(userAnswer);
    if (!success) {
      const prematureResults = yield select(selectors.audioToText.getResults);
      result = {
        isCorrect: false,
        value: prematureResults.toJS().map(e => e.userAnswer).join(' | ') + ' | ' + userAnswer
      };
      yield put(sagaActions.playWrongSound());
      // In exam, skip the end if the user makes one mistake
      if (isExam) {
        return result;
      }
    }
    yield put(audioToTextActions.addResult(Map({ success, userAnswer })));
    yield put(audioToTextActions.setUserAnswer(''));
  }
  const questionSuccess = yield select(selectors.audioToText.getSuccess);
  yield put(uiActions.set('playAudioButton', false));
  const results = yield select(selectors.audioToText.getResults);
  if (questionSuccess) {
    result = {
      isCorrect: true,
      value: results.toJS().map(e => e.userAnswer).join(' ')
    };
    yield put(sagaActions.playSuccessSound());
    if (isExam) {
      return result;
    }
    yield put(audioToTextActions.setStatus('finished'));
    yield delay(1000);
    return result;
  }
  result = {
    isCorrect: false,
    value: results.toJS().map(e => e.userAnswer).join(' ')
  };
  yield put(audioToTextActions.setStatus('finished'));
  yield put(uiActions.set('nextButton', true));
  yield take(sagaTypes.NEXT_QUESTION);
  return result;
}

// export function* nextScreen() {}

// export function* clean() {}
