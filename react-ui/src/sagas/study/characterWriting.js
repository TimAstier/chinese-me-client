import { put, select, call, take } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as videoActions } from '../../redux/video';
import { actions as uiActions } from '../../redux/ui';
import { fetchEntities } from '../entities';
import { shouldAskQuestion, askQuestion } from '../questionModal';
import { types as sagaTypes } from '../actions';


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
  return currentElement.writingUrl ? true : false;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run() {
  yield put(videoActions.autoPlayOn());
  yield take(sagaTypes.VIDEO_ENDED);
  // If the screenType depends on a setting which if not already defined,
  // ask user's preference. We don't ask in case of a Skip from the user.
  const setting = yield call(shouldAskQuestion, 'character/writing');
  if (setting) {
    return yield call(askQuestion, setting);
  }
  yield put(uiActions.set('nextButton', true));
  return yield take(sagaTypes.NEXT);
}

// export function* clean() {}
