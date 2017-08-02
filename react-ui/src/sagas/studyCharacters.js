import { put, all, call, race, take, select, fork }
  from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import { types as sagaTypes } from './actions';
import { types as uiTypes } from '../redux/ui';
import { fetchEntities } from './entities';
import { actions as fromStudy } from '../redux/study';
import { actions as fromUi } from '../redux/ui';
import { actions as fromCharacterPinyin } from '../redux/characterPinyin';
import { actions as fromSagas } from './actions';
import { actions as fromAudio } from '../redux/audio';
import selectors from '../rootSelectors';
import { playSuccessSound, playWrongSound } from './audio';

// Sub-routines

function* initCharacter(index) {
  yield put(fromUi.set('skipButton', true));
  yield put(fromUi.closeModal());
  const currentEpisode = yield select(selectors.getCurrentEpisode);
  yield put(fromStudy.setCurrentCharacterId(currentEpisode.characters[index]));
}

export function* playCharacters(episodeId) {
  // Display Title
  yield put(fromUi.set('skipButton', false));
  yield put(fromUi.set('nextButton', false));
  yield put(fromStudy.setTitle('Characters'));
  yield put(fromStudy.setPartNumber(1));
  yield put(push('/title'));
  // Fetch dialogs data
  yield all([
    call(fetchEntities, '/episode/' + episodeId + '/characters'),
    delay(3000) // Data is loaded during title screen
  ]);
  // TODO: handle fetch error
  const currentEpisode = yield select(selectors.getCurrentEpisode);
  const charactersCount = currentEpisode.characters.length;
  for (let i = 0; i < charactersCount; i++) {
    yield call(playCharacter, [i]);
  }
}

function* characterPinyin() {
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

function* characterPinyinInit() {
  yield put(fromUi.set('playAudioButton', true));
  yield put(fromCharacterPinyin.init());
}

function* playCharacter(index) {
  yield call(initCharacter, [index]);
  // Push route on router to mount studyCharacterPinyin container
  yield put(push('/study/character/pinyin'));
  yield call(characterPinyinInit);
  yield race({
    characterPinyin: call(characterPinyin),
    next: take(sagaTypes.NEXT),
    skip: take(sagaTypes.SKIP)
  });
  // TODO: Etymology
  // TODO: Writing
}
