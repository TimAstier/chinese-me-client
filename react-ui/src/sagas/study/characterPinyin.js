import { put, take, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as sagaTypes } from '../actions';
import { types as uiTypes } from '../../redux/ui';
import { actions as uiActions } from '../../redux/ui';
import { actions as exerciseActions } from '../../redux/exercise';
import { actions as sagaActions } from '../actions';
import { actions as audioActions } from '../../redux/audio';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import pinyinNumberToAudioUrl from '../../utils/pinyinNumberToAudioUrl';

export function isDataLoaded() {
  return true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/characters']);
  // TODO: handle fetch error
}

export function checkData() {
  return true;
}

export function* initStudyData() {
  yield put(exerciseActions.init());
}

export function* initUi() {
  yield put(uiActions.set('playAudioButton', true));
}

export function* run(isExam = false) {
  const result = {};
  const currentChar = yield select(selectors.getExerciseCharacter);
  const audioUrl = pinyinNumberToAudioUrl(currentChar.pinyinNumber);
  yield put(audioActions.set('audioUrl', audioUrl));
  while (true) { // eslint-disable-line no-constant-condition
    let attemptsLeft = yield select(selectors.exercise.getAttemptsLeft);
    while (attemptsLeft >= 0) {
      yield put(sagaActions.playAudio());
      yield take(sagaTypes.CHECK_ANSWER);
      const userAnswer = yield select(selectors.exercise.getUserAnswer);
      result.value = userAnswer;
      const expectedAnswer = currentChar.pinyinNumber;
      // Compare userAnswer without spaces with the expected result
      if (userAnswer.replace(/\s+/g, '') === expectedAnswer) {
        result.isCorrect = true;
        yield put(sagaActions.playSuccessSound());
        if (isExam) {
          return result;
        }
        yield put(exerciseActions.setStatus('correct'));
        yield put(uiActions.set('playAudioButton', false));
        yield delay(1000);
        return result;
      }
      result.isCorrect = false;
      yield put(sagaActions.playWrongSound());
      if (isExam) {
        // In exam, skip the end if the user makes one mistake
        return result;
      }
      if (attemptsLeft !== 0) {
        yield put(uiActions.openHintModal());
        yield take(uiTypes.CLOSE_HINT_MODAL);
        yield put(exerciseActions.setUserAnswer(''));
        yield put(exerciseActions.setAttemptsLeft(attemptsLeft - 1));
        attemptsLeft --;
      } else {
        yield put(exerciseActions.setStatus('wrong'));
        yield put(uiActions.set('nextButton', true));
        yield take(sagaTypes.NEXT_QUESTION);
        return result;
      }
    }
  }
}

// export function* nextScreen() {}

// export function* clean() {}
