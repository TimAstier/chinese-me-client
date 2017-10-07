import { put, select, take } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as audioToTextActions } from '../../redux/audioToText';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as fromUi } from '../../redux/ui';
import { Map } from 'immutable';
import { actions as fromAudio } from '../../redux/audio';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentAudioToTextId(id));
  const initialized = yield select(selectors.getReviewInitialized);
  if (!initialized) {
    return false;
  }
  const currentElement = yield select(selectors.getCurrentAudioToText);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData() {
  // TODO: review this to fetch data individually if necessary
  // yield call(fetchEntities, ['/episode/' + episodeId + '/review']);
  // // TODO: handle fetch error
  // const reviews = yield select(selectors.getReviews);
  // const exercises = reviews.getIn([episodeId, 'exercises']);
}

export function checkData() {
  return true;
}

export function* initStudyData() {
  yield put(fromUi.set('skipButton', false));
  yield put(fromUi.set('playAudioButton', true));
}

export function* initUi() {
  yield put(audioToTextActions.init());
}

export function* run(mode) {
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
    if (!success) {
      yield put(sagaActions.playWrongSound());
    }
    yield put(audioToTextActions.addResult(Map({ success, userAnswer })));
    yield put(audioToTextActions.setUserAnswer(''));
  }
  const questionSuccess = yield select(selectors.getAudioToTextSuccess);
  if (questionSuccess) {
    yield put(sagaActions.playSuccessSound());
    if (mode === 'exam') {
      return true;
    }
  } else {
    if (mode === 'exam') {
      return false;
    }
  }
  yield put(audioToTextActions.setStatus('finished'));
  yield put(fromUi.set('nextButton', true));
  return yield take(sagaTypes.NEXT);
}

// export function* clean() {}
