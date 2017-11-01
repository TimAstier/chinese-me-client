/* eslint-disable no-constant-condition */
import { takeEvery, put, call, all, select } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { actions as studyActions } from '../redux/study';
import { actions as entitiesActions } from '../redux/entities';
import { actions as uiActions } from '../redux/ui';
import { actions as mapActions } from '../redux/map';
import { push, replace } from 'react-router-redux';
import selectors from '../rootSelectors';
import getParamsFromUrl from '../utils/getParamsFromUrl';

function* unmount() {
  yield put(mapActions.setFocusedEpisodeId(null));
  yield put(studyActions.setCurrentEpisodeId(null));
  yield put(studyActions.setInitialized(false));
  // Only clear entities directly linked to ONE episode
  yield put(entitiesActions.clearAllBut(['episodes', 'seasons']));
}

function* exit() {
  yield put(push('/study'));
}

function* askQuestion() {
  yield put(uiActions.openFeedbackModal());
}

function* nextScreen(action) {
  const shouldUrlBeSkipped = action.payload.shouldUrlBeSkipped;
  const urlParams = getParamsFromUrl(yield select(selectors.routing.getCurrentUrl));
  const { episodeId, elementType, elementId, mode } = urlParams;
  const screenType = elementType + '/' + mode; // Define screenType
  const nextUrl = yield call(findNextUrl, { screenType, episodeId, elementId }); // Find next URL
  yield put(studyActions.setInitialized(false));
  // Push next url. If the screen's checkData function returned false,
  // we don't keep this URL in history.
  // This ensure a clean brower history, allowing next/previous browser events
  // to work properly.
  return yield put(shouldUrlBeSkipped ? replace(nextUrl) : push(nextUrl));
}

// TODO: DRY and simplifiy this
function* findNextUrl(params) {
  const { screenType, episodeId, elementId } = params;
  let currentEpisode = 0;
  switch (screenType) {
    case 'title/':
      const currentUrl = yield select(selectors.routing.getCurrentUrl);
      const partNumber = currentUrl.split('/')[4];
      switch (partNumber) {
        case '1': // characters
          currentEpisode = yield select(selectors.getCurrentEpisode);
          const characterId = currentEpisode.characters[0];
          return '/study/' + episodeId + '/character/' + characterId + '/pinyin';
        case '2': // grammar
          currentEpisode = yield select(selectors.getCurrentEpisode);
          const grammarId = currentEpisode.grammars[0];
          return '/study/' + episodeId + '/grammar/' + grammarId + '/explanation';
        case '3': // dialogs
          currentEpisode = yield select(selectors.getCurrentEpisode);
          const dialogId = currentEpisode.dialogs[0];
          return '/study/' + episodeId + '/dialog/' + dialogId + '/listen';
        case '4': // review
          return '/study/' + episodeId + '/review';
        case '5': // final exam
          return '/study/' + episodeId + '/exam';
        default: return '/error';
      }
    case 'character/pinyin':
      return '/study/' + episodeId + '/character/' + elementId + '/stroke';
    case 'character/stroke':
      return '/study/' + episodeId + '/character/' + elementId + '/strokeQuiz';
    case 'character/strokeQuiz':
      return '/study/' + episodeId + '/character/' + elementId + '/etymology';
    case 'character/etymology':
      return '/study/' + episodeId + '/character/' + elementId + '/writing';
    case 'character/writing':
      const nextCharacterId = yield select(selectors.getNextCharacterId);
      if (nextCharacterId) {
        return '/study/' + episodeId + '/character/' + nextCharacterId + '/pinyin';
      }
      return '/study/' + episodeId + '/title/2';
    case 'grammar/explanation':
      const nextGrammarId = yield select(selectors.getNextGrammarId);
      if (nextGrammarId) {
        return '/study/' + episodeId + '/grammar/' + nextGrammarId + '/explanation';
      }
      return '/study/' + episodeId + '/title/3';
    case 'dialog/listen':
      return '/study/' + episodeId + '/dialog/' + elementId + '/explore';
    case 'dialog/explore':
      return '/study/' + episodeId + '/dialog/' + elementId + '/roleplay';
    case 'dialog/roleplay':
      return '/study/' + episodeId + '/title/4';
    case 'review/':
      return '/study/' + episodeId + '/title/5';
    case 'exam/':
      return '/study/' + episodeId + '/result';
    case 'result/':
      return '/study';
    default:
      return '/error';
  }
}

function* startEpisode(action) {
  yield put(mapActions.setFocusedEpisodeId(action.payload.id));
  return yield put(push('/study/' + action.payload.id + '/title/1'));
}

export default function* watchEpisodeSagas() {
  yield all([
    takeEvery(sagaTypes.START_EPISODE, startEpisode),
    takeEvery(sagaTypes.EXIT, exit),
    takeEvery(sagaTypes.UNMOUNT_EPISODE_SCREEN, unmount),
    takeEvery(sagaTypes.ASK_QUESTION, askQuestion),
    takeEvery(sagaTypes.NEXT_SCREEN, nextScreen)
  ]);
}
