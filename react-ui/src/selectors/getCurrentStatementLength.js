import { createSelector } from 'reselect';
import getCurrentSentences from './getCurrentSentences';

const getCurrentStatementLength = createSelector(
  getCurrentSentences,
  sentences => {
    return sentences.reduce((sum, value) => {
      return sum + value.get('chinese').length;
    }, 0);
  }
);

export default getCurrentStatementLength;
