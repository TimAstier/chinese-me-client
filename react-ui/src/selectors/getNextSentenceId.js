import { createSelector } from 'reselect';
import getCurrentStatement from './getCurrentStatement';
import getCurrentSentenceIndex from './getCurrentSentenceIndex';

const getNextSentenceId = createSelector(
  getCurrentStatement,
  getCurrentSentenceIndex,
  (statement, i) => {
    return statement.sentences[i + 1] ? statement.sentences[i + 1] : undefined;
  }
);

export default getNextSentenceId;
