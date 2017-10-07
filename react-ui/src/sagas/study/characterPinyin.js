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
  yield put(uiActions.set('skipButton', true));
  yield put(uiActions.closeModal());
  yield put(uiActions.set('playAudioButton', true));
}

export function* run(mode) {
  const currentChar = yield select(selectors.getCurrentCharacter);
  const audioUrl = `https://s3.eu-west-2.amazonaws.com/chineseme/pinyin/${currentChar.pinyinNumber}.m4a`;
  yield put(audioActions.set('audioUrl', audioUrl));
  while (true) { // eslint-disable-line no-constant-condition
    let attemptsLeft = yield select(selectors.getCharacterPinyinAttemptsLeft);
    while (attemptsLeft >= 0) {
      yield put(sagaActions.playAudio());
      yield take(sagaTypes.CHECK_ANSWER);
      const userAnswer = yield select(selectors.getCharacterPinyinUserAnswer);
      const expectedAnswer = currentChar.pinyinNumber;
      if (userAnswer === expectedAnswer) {
        yield put(sagaActions.playSuccessSound());
        if (mode === 'exam') {
          return true;
        }
        yield put(characterPinyinActions.setStatus('correct'));
        yield put(uiActions.set('playAudioButton', false));
        yield delay(1000);
        yield put(sagaActions.next());
      } else {
        yield put(sagaActions.playWrongSound());
        if (mode === 'exam') {
          return false;
        }
        if (attemptsLeft !== 0) {
          yield put(characterPinyinActions.setUserAnswer(''));
          yield put(uiActions.openModal());
          yield take(uiTypes.CLOSE_MODAL);
          yield put(characterPinyinActions.setAttemptsLeft(attemptsLeft - 1));
          attemptsLeft --;
        } else {
          yield put(characterPinyinActions.setStatus('wrong'));
          yield put(uiActions.set('nextButton', true));
          yield take(sagaTypes.NEXT);
        }
      }
    }
  }
}

// export function* clean() {}
