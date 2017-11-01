import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentSentence = createSelector(
  s.entities.getSentences,
  s.study.getCurrentSentenceId,
  (sentences, id) => sentences.get(String(id))
);

export default getCurrentSentence;
