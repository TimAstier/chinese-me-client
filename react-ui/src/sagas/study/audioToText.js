import { put, select, call, take } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { fetchEntities } from '../entities';
import { actions as audioToTextActions } from '../../redux/audioToText';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as fromUi } from '../../redux/ui';
import { Map } from 'immutable';
import { actions as fromAudio } from '../../redux/audio';

export function* checkData(id) {
  yield put(studyActions.setCurrentAudioToTextId(id));
  const currentElement = yield select(selectors.getCurrentAudioToText);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, '/episode/' + episodeId + '/audioToTexts');
  // TODO: handle fetch error
}

export function* initStudyData() {
  yield put(fromUi.set('skipButton', true));
  yield put(fromUi.set('playAudioButton', true));
}

export function* initUi() {
  yield put(audioToTextActions.init());
}

export function* run() {
  const currentAudioToText = yield select(selectors.getCurrentAudioToText);
  yield put(fromAudio.set('audioUrl', currentAudioToText.audioUrl));
  yield put(sagaActions.playAudio());
  const wordIds = currentAudioToText.words;
  const words = yield select(selectors.getWords);
  for (let i = 0; i < wordIds.length; i++) {
    const word = words.get(String(wordIds[i]));
    yield put(audioToTextActions.setCurrentBoxIndex(i));
    yield take(sagaTypes.CHECK_ANSWER);
    const userAnswer = yield select(selectors.getAudioToTextUserAnswer);
    const success = word.get('pinyin') === userAnswer;
    yield put(audioToTextActions.addResult(Map({ success, userAnswer })));
    yield put(audioToTextActions.setUserAnswer(''));
  }
  yield put(audioToTextActions.setStatus('finished'));
  yield put(fromUi.set('nextButton', true));
  yield take(sagaTypes.NEXT);
}
