import { call, put } from 'redux-saga/effects';
import Api from '../utils/api';
import { actions as exerciseActions } from '../redux/exercise';

/**
 * Check the userAnswer against answers in the DB.
 *
 * @param {integer} exerciseId The id of the exercise.
 * @param {string} userAnswer The user answer.
 * @returns {object} An object with the following shape:
 * {
 *   isCorrect: {boolean},
 *   correctAnswer: {string},
 *   explanation: {string}
 * }
 */

export function* fetch(exerciseId, userAnswer) {
  try {
    yield put(exerciseActions.setLoadingAnswer(true));
    const response = yield call(Api.get, `/teacherComment/${exerciseId}/${userAnswer}`);
    yield put(exerciseActions.setLoadingAnswer(false));
    return response.data;
  } catch (error) {
    yield put(exerciseActions.setLoadingAnswer(false));
    // TODO: handle error
    console.log(error);
  }
}
