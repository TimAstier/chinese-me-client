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
  console.log('Ask user setting: ', setting)
  yield put(questionActions.setSetting(setting));
  yield put(uiActions.openQuestionModal());
  const action = yield take(sagaTypes.QUESTION_ANSWERED);
  yield call(sendQuestionAnswer, [setting, action.payload.answer]);
}

function* sendQuestionAnswer(params) {
  const setting = settingsConstants[params[0]].name;
  let value = undefined;
  if (typeof params[1] === 'string') {
    // Raw data
    value = params[1] === 'A' ? true : false; // closedQuestion answer
  } else {
    // Data from registered redux-form
    value = params[1].values.get('value');
  }
  yield put(uiActions.closeQuestionModal());
  try {
    const savedSettings = yield call(
      Api.post,
      '/users/settings',
      { setting, value }
    );
    yield put(settingsActions.set(savedSettings.data));
  } catch (error) {
    // TODO: handle errors
  }
}
