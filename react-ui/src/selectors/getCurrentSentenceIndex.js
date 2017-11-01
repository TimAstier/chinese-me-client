import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCurrentStatement from './getCurrentStatement';

const getCurrentSentenceIndex = createSelector(
  getCurrentStatement,
  s.study.getCurrentSentenceId,
  (statement, id) =>
    statement ? statement.sentences.findIndex(s => s === id) : 0
);

export default getCurrentSentenceIndex;
