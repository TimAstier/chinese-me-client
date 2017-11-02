import { select, take, call } from 'redux-saga/effects';
import selectors from '../rootSelectors';
import { types as appTypes } from '../redux/app';
import trim from 'lodash/trim';
import { askQuestion } from './questionModal';

function* ensureAppInitialized() {
  const appInitialized = yield select(selectors.app.getInitialized);
  if (!appInitialized) {
    yield take(appTypes.SET_INITIALIZED);
  }
}

export function* askUserSettings() {
  yield call(ensureAppInitialized);
  const requiredUserData = yield select(selectors.getRequiredUserData);
  if (requiredUserData) {
    for (const setting of requiredUserData) {
      console.log(setting)
      // TODO: do not ask if already exist (reuse existing saga)
      yield call(askQuestion, trim(setting));
    }
  }
}
