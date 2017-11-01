import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getMapCharactersCompletedCount = createSelector(
  s.map.getCharacters,
  characters => {
    return characters.filter(c => c.get('userCharacters').size !== 0).size;
  }
);

export default getMapCharactersCompletedCount;
