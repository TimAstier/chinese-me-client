import { put, select, take, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import selectors from '../../rootSelectors';
// import { actions as studyActions } from '../../redux/study';
import { actions as audioToWordsActions } from '../../redux/audioToWords';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { Map } from 'immutable';
import { fetchEntities } from '../entities';
import { actions as audioActions } from '../../redux/audio';

const trim = string => {
  return string.replace(/\s+/g, '').toLowerCase();
};

export function isDataLoaded() {
  return true;
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
  yield put(audioToWordsActions.init());
}

export function* run(isExam = false) {
  let result;
  const exercise = yield select(selectors.getCurrentExercise);
  yield put(audioActions.set('audioUrl', exercise.audioUrl));
  yield put(sagaActions.playAudio());
  const words = yield select(selectors.getExerciseWords);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    yield put(audioToWordsActions.setCurrentBoxIndex(i));
    yield take(sagaTypes.CHECK_ANSWER);
    const userAnswer = yield select(selectors.audioToWords.getUserAnswer);
    const success = trim(word.get('pinyin')) === trim(userAnswer);
    if (!success) {
      const prematureResults = yield select(selectors.audioToWords.getResults);
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
    yield put(audioToWordsActions.addResult(Map({ success, userAnswer })));
    yield put(audioToWordsActions.setUserAnswer(''));
  }
  const questionSuccess = yield select(selectors.audioToWords.getSuccess);
  yield put(uiActions.set('playAudioButton', false));
  const results = yield select(selectors.audioToWords.getResults);
  if (questionSuccess) {
    result = {
      isCorrect: true,
      value: results.toJS().map(e => e.userAnswer).join(' ')
    };
    yield put(sagaActions.playSuccessSound());
    if (isExam) {
      return result;
    }
    yield put(audioToWordsActions.setStatus('finished'));
    yield delay(1000);
    return result;
  }
  result = {
    isCorrect: false,
    value: results.toJS().map(e => e.userAnswer).join(' ')
  };
  yield put(audioToWordsActions.setStatus('finished'));
  yield put(uiActions.set('nextButton', true));
  yield take(sagaTypes.NEXT_QUESTION);
  return result;
}

// export function* nextScreen() {}

// export function* clean() {}
