import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCurrentExercise from './getCurrentExercise';

const getExerciseCharacter = createSelector(
  s.entities.getCharacters,
  getCurrentExercise,
  (characters, exercise) => {
    return characters.get(String(exercise.get('characterId')));
  }
);

export default getExerciseCharacter;
