import { call, put, take, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { types as sagaTypes } from '../actions';
import Api from '../../utils/api';
import { actions as uiActions } from '../../redux/ui';
import { actions as sagaActions } from '../actions';
import { actions as settingsActions } from '../../redux/settings';
import { actions as questionActions } from '../../redux/question';
import selectors from '../../rootSelectors';
import { default as settingsConstants } from '../../constants/settings';
import trim from 'lodash/trim';

export function* askQuestion(setting) {
  yield put(questionActions.setSetting(setting));
  // When initialized is false, the component is not rendered.
  // After the question, initialized is set back to false.
  // This unmounts the component and destroys the associated redux-form, which
  // allows to reset any previous value entered by the user
  yield put(questionActions.setInitialized(true));
  const action = yield take(sagaTypes.QUESTION_ANSWERED);
  yield call(sendQuestionAnswer, [setting, action.payload.userInput, action.payload.reduxFormFcs]);
  yield put(questionActions.setInitialized(false));
}

function* sendQuestionAnswer(params) {
  yield put(questionActions.setSaving(true));
  const userId = yield select(selectors.auth.getCurrentUserId);
  const setting = settingsConstants[params[0]].name;
  const userInput = params[1];
  // A little bit messy because closedQuestions are not built with redux form.
  const resolve = params[2] ? params[2].resolve : undefined;
  const reject = params[2] ? params[2].reject : undefined;
  // TODO: start loader
  try {
    const savedSettings = yield call(
      Api.post,
      '/users/settings',
      { setting, userInput }
    );
    yield put(settingsActions.set(userId, savedSettings.data));
    if (resolve) {
      yield call(resolve);
      yield put(questionActions.setSaving(false));
    }
  } catch (error) {
    yield put(questionActions.setSaving(false));
    if (reject) { yield call(reject, error.response.data.errors[0].message); }
    // TODO: handle errors
  }
}

export function isDataLoaded() {
  return true;
}

export function* fetchData() {}

export function checkData() {
  return true;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run() {
  yield put(questionActions.init());
  let requiredUserData = yield select(selectors.getRequiredUserData);
  if (requiredUserData) {
    requiredUserData = requiredUserData.map(e => trim(e));
    // for (const setting of requiredUserData) {
    //   yield call(askQuestion, setting);
    //   yield put(questionActions.incrementCurrentIndex());
    // }
    for (let i = 0; i < requiredUserData.length; i++) {
      yield call(askQuestion, requiredUserData[i]);
      yield put(questionActions.incrementCurrentIndex());
      if (i === requiredUserData.length - 1) {
        yield put(sagaActions.playLevelWinSound());
      } else {
        yield put(sagaActions.playSuccessSound());
      }
    }
    yield put(questionActions.setStatus('result'));
    yield put(uiActions.set('nextButton', true));
    return yield take(sagaTypes.NEXT);
  }
}

export function* nextScreen() {
  const url = yield select(selectors.getBackUrl);
  return yield put(push(url));
}

// export function* clean() {}
