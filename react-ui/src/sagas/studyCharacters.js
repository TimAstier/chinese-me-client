import { put, all, call, takeLatest, race, take, select }
  from 'redux-saga/effects';
import { delay } from 'redux-saga';
// import { types as studyTypes } from '../redux/study';
import { types as sagaTypes } from './actions';
// import selectors from '../rootSelectors';
import { actions as fromStudy } from '../redux/study';
// import { actions as fromEntities } from '../redux/entities';
import { actions as fromUi } from '../redux/ui';
import selectors from '../rootSelectors';
// import { playSound } from './audio';
import { push } from 'react-router-redux';
import { fetchEntities } from './entities';

// Sub-routines

function* initCharacter() {
  yield put(fromUi.set('skipButton', true));
  const currentEpisode = yield select(selectors.getCurrentEpisode);
  yield put(fromStudy.setCurrentCharacterId(currentEpisode.characters[0]));
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
  yield call(playCharacter); // TODO: for i = 0 to characters.length
}

function* playCharacter() {
  yield call(initCharacter);
  // Push route on router to mount studyCharacterPinyin container
  yield put(push('/study/character/pinyin'));
  yield race({
    next: take(sagaTypes.NEXT),
    skip: take(sagaTypes.SKIP)
  });
}

export function* playAudio() {
  yield console.log('play audio');
}


// Export watchers

export default function* watchStudyCharactersSagas() {
  yield all([
    takeLatest(sagaTypes.PLAY_AUDIO, playAudio)
  ]);
}
