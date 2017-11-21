import { createSelector } from 'reselect';
import getCurrentSentencesWithValues from './getCurrentSentencesWithValues';

const getCurrentStatementLength = createSelector(
  getCurrentSentencesWithValues,
  sentences => {
    return sentences.reduce((sum, value) => {
      return sum + value.get('chinese').length;
    }, 0);
  }
);

export default getCurrentStatementLength;
