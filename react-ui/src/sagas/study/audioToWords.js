import { put, select, take, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import selectors from '../../rootSelectors';
// import { actions as studyActions } from '../../redux/study';
import { actions as exerciseActions } from '../../redux/exercise';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { Map } from 'immutable';
import { fetchEntities } from '../entities';
import { actions as audioActions } from '../../redux/audio';
import makeAudioUrl from '../../helpers/makeAudioUrl';

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
  yield put(exerciseActions.init());
}

export function* run(isExam = false) {
  let result;
  const exercise = yield select(selectors.getCurrentExercise);
  yield put(audioActions.set('audioUrl', makeAudioUrl(exercise.audioUrl)));
  yield put(sagaActions.playAudio());
  const words = yield select(selectors.getExerciseWords);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    yield put(exerciseActions.setCurrentBoxIndex(i));
    yield take(sagaTypes.CHECK_ANSWER);
    const userAnswer = yield select(selectors.exercise.getUserAnswer);
    const success = trim(word.get('pinyin')) === trim(userAnswer);
    if (!success) {
      const prematureResults = yield select(selectors.exercise.getResults);
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
    yield put(exerciseActions.addResult(Map({ success, userAnswer })));
    yield put(exerciseActions.setUserAnswer(''));
  }
  const questionSuccess = yield select(selectors.exercise.getSuccess);
  yield put(uiActions.set('playAudioButton', false));
  const results = yield select(selectors.exercise.getResults);
  if (questionSuccess) {
    result = {
      isCorrect: true,
      value: results.toJS().map(e => e.userAnswer).join(' ')
    };
    yield put(sagaActions.playSuccessSound());
    if (isExam) {
      return result;
    }
    yield put(exerciseActions.setStatus('finished'));
    yield delay(1000);
    return result;
  }
  result = {
    isCorrect: false,
    value: results.toJS().map(e => e.userAnswer).join(' ')
  };
  yield put(exerciseActions.setStatus('finished'));
  yield put(uiActions.set('nextButton', true));
  yield take(sagaTypes.NEXT_QUESTION);
  return result;
}

// export function* nextScreen() {}

// export function* clean() {}
