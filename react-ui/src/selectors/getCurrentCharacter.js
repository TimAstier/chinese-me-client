import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentCharacter = createSelector(
  s.entities.getCharacters,
  s.study.getCurrentCharacterId,
  (characters, id) => {
    if (characters.get(String(id))) {
      return characters.get(String(id));
    }
    return undefined;
  }
);

export default getCurrentCharacter;
