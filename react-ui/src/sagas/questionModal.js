import { call, put, take, select } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import Api from '../utils/api';
import { actions as uiActions } from '../redux/ui';
import { actions as settingsActions } from '../redux/settings';
import { actions as questionActions } from '../redux/question';
import selectors from '../rootSelectors';
import { default as settingsConstants } from '../constants/settings';

// Returns setting or false;
export function* shouldAskQuestion(setting) {
  // Check if setting is already defined
  const userSettings = yield select(selectors.settings.getSettings);
  const userSetting = userSettings.get(settingsConstants[setting].name);
  if (userSetting === null) {
    // There is this field in userSettings, but it is still uninitialized
    // Therefore we should ask question
    return true;
  }
  return false;
}

/* Called in
** 1. study sagas (runEpisodeScreen)
** 2. userData sagas (askUserSettings)
*/
export function* askQuestion(setting) {
  yield put(questionActions.setSetting(setting));
  yield put(uiActions.openQuestionModal());
  const action = yield take(sagaTypes.QUESTION_ANSWERED);
  yield call(sendQuestionAnswer, [setting, action.payload.answer]);
}

// TODO: Clean this
// A little bit messy because closedQuestions are not built with redux form.
function* sendQuestionAnswer(params) {
  const userId = yield select(selectors.auth.getCurrentUserId);
  const setting = settingsConstants[params[0]].name;
  let value = undefined;
  let resolve;
  let reject;
  if (typeof params[1] === 'string') {
    // Raw data
    value = params[1]; // closedQuestion answer
  } else {
    // Data from registered redux-form
    value = params[1].values.get('value');
    resolve = params[1].resolve;
    reject = params[1].reject;
  }
  yield put(uiActions.closeQuestionModal());
  try {
    const savedSettings = yield call(
      Api.post,
      '/users/settings',
      { setting, value }
    );
    yield put(settingsActions.set(userId, savedSettings.data));
    if (resolve) { yield call(resolve); }
  } catch (error) {
    if (reject) { yield call(reject, error.response.data.errors[0].message); }
    // TODO: handle errors
  }
}
