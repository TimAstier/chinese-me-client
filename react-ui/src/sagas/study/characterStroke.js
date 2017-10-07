import { put, take, select, call } from 'redux-saga/effects';
// import { types as uiTypes } from '../../redux/ui';
import { delay } from 'redux-saga';
import { actions as uiActions } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as audioActions } from '../../redux/audio';
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

export function* checkData() {
  const currentElement = yield select(selectors.getCurrentCharacter);
  return currentElement.hanziData ? true : false;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run() {
  const currentChar = yield select(selectors.getCurrentCharacter);
  const audioUrl = `https://s3.eu-west-2.amazonaws.com/chineseme/pinyin/${currentChar.pinyinNumber}.m4a`;
  yield put(audioActions.set('audioUrl', audioUrl));
  yield take(sagaTypes.STROKE_ANIMATION_FINISHED);
  yield put(sagaActions.playAudio());
  yield delay(1500);
}

// export function* clean() {}
