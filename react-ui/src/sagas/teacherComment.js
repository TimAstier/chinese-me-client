import { call } from 'redux-saga/effects';
import Api from '../utils/api';

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
    const response = yield call(Api.get, `/teacherComment/${exerciseId}/${userAnswer}`);
    return response.data;
  } catch (error) {
    // TODO: handle error
    console.log(error);
  }
}
