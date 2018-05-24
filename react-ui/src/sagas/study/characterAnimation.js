import { put, take, select, call } from 'redux-saga/effects';
// import { types as uiTypes } from '../../redux/ui';
import { delay } from 'redux-saga';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as audioActions } from '../../redux/audio';
import { actions as hanziActions } from '../../redux/hanzi';
import { fetchEntities } from '../entities';
import pinyinNumberToAudioUrl from '../../utils/pinyinNumberToAudioUrl';
import { replace } from 'react-router-redux';
import randomID from '../../utils/randomID';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentCharacterId(id));
  const currentElement = yield select(selectors.getCurrentCharacter);
  return (currentElement === undefined || !currentElement.hanziData) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/characters']);
  // TODO: handle fetch error
}

export function checkData() {
  return true;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run() {
  // We set an animationId to ensure that the STROKE_ANIMATION_FINISHED
  // signal do not come from a previously instantiated hanziWriter
  const animationId = randomID();
  yield put(hanziActions.setAnimationId(animationId));
  const currentChar = yield select(selectors.getCurrentCharacter);
  const audioUrl = pinyinNumberToAudioUrl(currentChar.pinyinNumber);
  yield put(audioActions.set('audioUrl', audioUrl));
  // Wait for an animation with the correct animationId to finish
  yield take(action => {
    if (action.type === sagaTypes.STROKE_ANIMATION_FINISHED) {
      if (action.payload.animationId === animationId) {
        return true;
      }
    }
    return false;
  });
  yield put(sagaActions.playAudio());
  yield delay(1500);
}

export function* nextScreen() {
  const episodeId = yield select(selectors.study.getCurrentEpisodeId);
  const currentElement = yield select(selectors.getCurrentCharacter);
  yield put(replace(`/course/${episodeId}/character/${currentElement.id}/stroke`));
}

// export function* clean() {}
