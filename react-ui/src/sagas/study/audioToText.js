import { put, select, call, take, fork } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { fetchEntities } from '../entities';
import { actions as audioToTextActions } from '../../redux/audioToText';
import { types as sagaTypes } from '../actions';
import { actions as fromUi } from '../../redux/ui';
import { playSuccessSound, playWrongSound } from '../audio';
import { Map } from 'immutable';

// TODO: remove this and replace by fetching real data
const wordsTest = [{
  chinese: '我',
  pinyin: 'wo3',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '明天',
  pinyin: 'ming2tian1',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '去',
  pinyin: 'qu4',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '你',
  pinyin: 'ni3',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '家',
  pinyin: 'jia1',
  aurdioUrl: 'blabla.com'
}, {
  chinese: '吃饭',
  pinyin: 'chi1fan4',
  aurdioUrl: 'blabla.com'
}];

export function* checkData(id) {
  // yield put(studyActions.setCurrentMultipleChoiceId(id));
  // const currentElement = yield select(selectors.getCurrentMultipleChoice);
  // return (currentElement === undefined) ? false : true;
  return true;
}

export function* fetchData(episodeId) {
  // return yield call(fetchEntities, '/episode/' + episodeId + '/multipleChoices');
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
  for (let i = 0; i < wordsTest.length; i++) {
    yield put(audioToTextActions.setCurrentBoxIndex(i));
    yield take(sagaTypes.CHECK_ANSWER);
    const userAnswer = yield select(selectors.getAudioToTextUserAnswer);
    const success = wordsTest[i].pinyin === userAnswer;
    yield put(audioToTextActions.addResult(Map({ success, userAnswer })));
    yield put(audioToTextActions.setUserAnswer(''));
  }
  yield put(audioToTextActions.setStatus('finished'));
  yield put(fromUi.set('nextButton', true));
  yield take(sagaTypes.NEXT);
}
