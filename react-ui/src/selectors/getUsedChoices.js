import { createSelector } from 'reselect';
import getCurrentExercise from './getCurrentExercise';
import s from './globalizedSelectors';
import isEmpty from 'lodash/isEmpty';

const getUsedChoices = createSelector(
  getCurrentExercise,
  s.exercise.getIndexes,
  (exercise, indexes) => {
    const choices = exercise.get('choices');
    if (!choices || isEmpty(choices)) {
      return [];
    }
    const result = [];
    indexes.forEach(index => {
      result.push({
        value: choices[index],
        index
      });
    });
    return result;
  }
);

export default getUsedChoices;
