import { put, take, select, call } from 'redux-saga/effects';
// import { types as uiTypes } from '../../redux/ui';
import { actions as fromUi } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { actions as fromStudy } from '../../redux/study';
import { types as sagaTypes } from '../actions';
import { actions as fromAudio } from '../../redux/audio';
import { fetchEntities } from '../entities';
import { playSuccessSound } from '../audio';

export function* isDataLoaded(id) {
  yield put(fromStudy.setCurrentCharacterId(id));
  const currentElement = yield select(selectors.getCurrentCharacter);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/characters']);
  // TODO: handle fetch error
}

export function* checkData() {
  const currentElement = yield select(selectors.getCurrentCharacter);
  return currentElement.hanziData ? true : false;
}

export function* initStudyData() {}

export function* initUi() {
  yield put(fromUi.set('skipButton', true));
  yield put(fromUi.closeModal());
}

export function* run() {
  const currentChar = yield select(selectors.getCurrentCharacter);
  const audioUrl = `https://s3.eu-west-2.amazonaws.com/chineseme/pinyin/${currentChar.pinyinNumber}.m4a`;
  yield put(fromAudio.set('audioUrl', audioUrl));
  yield take(sagaTypes.STROKE_QUIZ_COMPLETED);
  yield call(playSuccessSound);
}
