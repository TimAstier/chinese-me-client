import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentGrammar = createSelector(
  s.entities.getGrammars,
  s.study.getCurrentGrammarId,
  (grammars, id) => grammars.get(String(id))
);

export default getCurrentGrammar;
