import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getMapGrammarsCompletedCount = createSelector(
  s.map.getGrammars,
  grammars => {
    return grammars.filter(c => c.get('userGrammars').size !== 0).size;
  }
);

export default getMapGrammarsCompletedCount;
