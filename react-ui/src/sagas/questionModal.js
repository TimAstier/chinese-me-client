import { call, put, take, select } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import Api from '../utils/api';
import { actions as uiActions } from '../redux/ui';
import { actions as settingsActions } from '../redux/settings';
import screenTypeToUserSettings from '../utils/screenTypeToUserSettings';
import selectors from '../rootSelectors';

// Returns setting or false;
function* shouldAskQuestion(screenType) {
  const setting = screenTypeToUserSettings(screenType);
  // Check if this screenType has a related setting
  if (setting !== null) {
    // Check if the current user has a preference
    const userSettings = yield select(selectors.getSettings);
    const userSetting = userSettings.get(setting);
    if (userSetting === null) {
      // There is this field in userSettings, but it is still uninitialized
      // Therefore we should ask question
      return setting;
    }
  }
  return false;
}

// Called in study sagas, runEpisodeScreen
export function* askQuestion(screenType) {
  const setting = yield call(shouldAskQuestion, screenType);
  if (setting) {
    yield put(uiActions.openQuestionModal());
    const action = yield take(sagaTypes.CLOSED_QUESTION_ANSWERED);
    yield call(sendClosedQuestionAnswer, [setting, action.payload.answer]);
  }
}

function* sendClosedQuestionAnswer(params) {
  yield put(uiActions.closeQuestionModal());
  const setting = params[0];
  const value = params[1] === 'A' ? true : false;
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
