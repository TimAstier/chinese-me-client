import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentExercise = createSelector(
  s.entities.getExercises,
  s.study.getCurrentExerciseId,
  (exercises, id) => exercises.get(String(id))
);

export default getCurrentExercise;
