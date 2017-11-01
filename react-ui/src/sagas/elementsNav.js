import { all, takeEvery, put, select } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { push } from 'react-router-redux';
import getParamsFromUrl from '../utils/getParamsFromUrl';
import selectors from '../rootSelectors';

function* previous() {
  const urlParams = getParamsFromUrl(yield select(selectors.routing.getCurrentUrl));
  const { episodeId, elementType } = urlParams;
  let previousElementId = undefined;
  switch (elementType) {
    case 'character':
      previousElementId = yield select(selectors.getPreviousCharacterId);
      return yield put(push('/study/' + episodeId + '/character/' + previousElementId + '/pinyin'));
    case 'grammar':
      previousElementId = yield select(selectors.getPreviousGrammarId);
      return yield put(push('/study/' + episodeId + '/grammar/' + previousElementId + '/explanation'));
    case 'dialog':
      previousElementId = yield select(selectors.getPreviousDialogId);
      return yield put(push('/study/' + episodeId + '/dialog/' + previousElementId + '/listen'));
    default: return console.log('error on previous');
  }
}

function* next() {
  const urlParams = getParamsFromUrl(yield select(selectors.routing.getCurrentUrl));
  const { episodeId, elementType } = urlParams;
  let nextElementId = undefined;
  switch (elementType) {
    case 'character':
      nextElementId = yield select(selectors.getNextCharacterId);
      return yield put(push('/study/' + episodeId + '/character/' + nextElementId + '/pinyin'));
    case 'grammar':
      nextElementId = yield select(selectors.getNextGrammarId);
      return yield put(push('/study/' + episodeId + '/grammar/' + nextElementId + '/explanation'));
    case 'dialog':
      nextElementId = yield select(selectors.getNextDialogId);
      return yield put(push('/study/' + episodeId + '/dialog/' + nextElementId + '/listen'));
    default: return console.log('error on next');
  }
}

export default function* watchElementsNavSagas() {
  yield all([
    takeEvery(sagaTypes.ELEMENTS_NAV_PREVIOUS_CLICK, previous),
    takeEvery(sagaTypes.ELEMENTS_NAV_NEXT_CLICK, next),
  ]);
}
