import { put, take, select, fork, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as sagaTypes } from '../actions';
import { types as uiTypes } from '../../redux/ui';
import { actions as fromUi } from '../../redux/ui';
import { actions as fromCharacterPinyin } from '../../redux/characterPinyin';
import { actions as fromSagas } from '../actions';
import { actions as fromAudio } from '../../redux/audio';
import selectors from '../../rootSelectors';
import { playSuccessSound, playWrongSound } from '../audio';
import { actions as studyActions } from '../../redux/study';
import { fetchEntities } from '../entities';

export function* checkData(id) {
  yield put(studyActions.setCurrentCharacterId(id));
  const currentElement = yield select(selectors.getCurrentCharacter);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, '/episode/' + episodeId + '/characters');
  // TODO: handle fetch error
}

export function* initStudyData() {
  yield put(fromCharacterPinyin.init());
}

export function* initUi() {
  yield put(fromUi.set('skipButton', true));
  yield put(fromUi.closeModal());
  yield put(fromUi.set('playAudioButton', true));
}

export function* run() {
  const currentChar = yield select(selectors.getCurrentCharacter);
  yield put(fromAudio.set('audioUrl', currentChar.audioUrl));
  while (true) { // eslint-disable-line no-constant-condition
    let attemptsLeft = yield select(selectors.getCharacterPinyinAttemptsLeft);
    while (attemptsLeft >= 0) {
      yield put(fromSagas.playAudio());
      yield take(sagaTypes.CHECK_ANSWER);
      const userAnswer = yield select(selectors.getCharacterPinyinUserAnswer);
      const expectedAnswer = currentChar.pinyinNumber;
      if (userAnswer === expectedAnswer) {
        yield fork(playSuccessSound);
        yield put(fromCharacterPinyin.setStatus('correct'));
        yield put(fromUi.set('playAudioButton', false));
        yield delay(2000);
        yield put(fromSagas.next());
      } else {
        if (attemptsLeft !== 0) {
          yield fork(playWrongSound);
          yield put(fromCharacterPinyin.setUserAnswer(''));
          yield put(fromUi.openModal());
          yield take(uiTypes.CLOSE_MODAL);
          yield put(fromCharacterPinyin.setAttemptsLeft(attemptsLeft - 1));
          attemptsLeft --;
        } else {
          yield fork(playWrongSound);
          yield put(fromCharacterPinyin.setStatus('wrong'));
          yield put(fromUi.set('nextButton', true));
        }
      }
    }
  }
}