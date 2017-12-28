import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCurrentExercise from './getCurrentExercise';

const getExerciseWords = createSelector(
  s.entities.getWords,
  getCurrentExercise,
  (words, exercise) => {
    const result = [];
    const wordIds = exercise.get('words');
    wordIds.forEach(id => result.push(words.get(String(id))));
    return result;
  }
);

export default getExerciseWords;
