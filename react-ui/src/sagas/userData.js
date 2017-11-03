import { select, take, call } from 'redux-saga/effects';
import selectors from '../rootSelectors';
import { types as appTypes } from '../redux/app';
import trim from 'lodash/trim';
import { shouldAskQuestion, askQuestion } from './questionModal';

function* ensureAppInitialized() {
  const appInitialized = yield select(selectors.app.getInitialized);
  if (!appInitialized) {
    yield take(appTypes.SET_INITIALIZED);
  }
}

export function* askUserSettings() {
  yield call(ensureAppInitialized);
  let requiredUserData = yield select(selectors.getRequiredUserData);
  if (requiredUserData) {
    requiredUserData = requiredUserData.map(e => trim(e));
    for (const setting of requiredUserData) {
      const ask = yield call(shouldAskQuestion, setting);
      if (ask) {
        yield call(askQuestion, setting);
      }
    }
  }
}
