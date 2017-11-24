import { put, take, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as sagaTypes } from '../actions';
import { types as uiTypes } from '../../redux/ui';
import { actions as uiActions } from '../../redux/ui';
import { actions as characterPinyinActions } from '../../redux/characterPinyin';
import { actions as sagaActions } from '../actions';
import { actions as audioActions } from '../../redux/audio';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { fetchEntities } from '../entities';
import { actions as reviewActions } from '../../redux/review';
import pinyinNumberToAudioUrl from '../../utils/pinyinNumberToAudioUrl';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentCharacterId(id));
  const currentElement = yield select(selectors.getCurrentCharacter);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/characters']);
  // TODO: handle fetch error
}

export function checkData() {
  return true;
}

export function* initStudyData() {
  yield put(characterPinyinActions.init());
}

export function* initUi() {
  yield put(uiActions.set('playAudioButton', true));
}

export function* run(mode = 'free') {
  const currentChar = yield select(selectors.getCurrentCharacter);
  const audioUrl = pinyinNumberToAudioUrl(currentChar.pinyinNumber);
  yield put(audioActions.set('audioUrl', audioUrl));
  while (true) { // eslint-disable-line no-constant-condition
    let attemptsLeft = yield select(selectors.characterPinyin.getAttemptsLeft);
    while (attemptsLeft >= 0) {
      yield put(sagaActions.playAudio());
      yield take(sagaTypes.CHECK_ANSWER);
      const userAnswer = yield select(selectors.characterPinyin.getUserAnswer);
      const expectedAnswer = currentChar.pinyinNumber;
      // Compare userAnswer without spaces with the expected answer
      if (userAnswer.replace(/\s+/g, '') === expectedAnswer) {
        // Tracking
        yield put(sagaActions.exerciseCompleted({
          id: currentChar.get('id'),
          type: 'characterPinyin',
          mode,
          success: true,
          userAnswer,
          expectedAnswer,
          attemptsLeft
        }));
        // End Tracking
        yield put(sagaActions.playSuccessSound());
        if (mode === 'exam') {
          return true;
        }
        yield put(characterPinyinActions.setStatus('correct'));
        yield put(uiActions.set('playAudioButton', false));
        if (mode === 'review') {
          yield delay(1000);
          yield put(reviewActions.setInitialized(false));
          return yield put(reviewActions.correctAnswer());
        }
        return yield delay(1000);
      } else {
        // Tracking
        yield put(sagaActions.exerciseCompleted({
          id: currentChar.get('id'),
          type: 'characterPinyin',
          mode,
          success: false,
          userAnswer,
          expectedAnswer,
          attemptsLeft
        }));
        // End Tracking
        yield put(sagaActions.playWrongSound());
        if (mode === 'exam') {
          // In exam, skip the end if the user makes one mistake
          return false;
        }
        if (attemptsLeft !== 0) {
          yield put(uiActions.openHintModal());
          yield take(uiTypes.CLOSE_HINT_MODAL);
          yield put(characterPinyinActions.setUserAnswer(''));
          yield put(characterPinyinActions.setAttemptsLeft(attemptsLeft - 1));
          attemptsLeft --;
        } else {
          yield put(characterPinyinActions.setStatus('wrong'));
          yield put(uiActions.set('nextButton', true));
          if (mode === 'review') {
            yield take(sagaTypes.NEXT_QUESTION);
            yield put(reviewActions.setInitialized(false));
            return yield put(reviewActions.wrongAnswer());
          }
          yield take(sagaTypes.NEXT);
        }
      }
    }
  }
}

// export function* nextScreen() {}

// export function* clean() {}
