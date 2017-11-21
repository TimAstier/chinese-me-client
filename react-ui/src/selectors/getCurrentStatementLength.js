import { createSelector } from 'reselect';
import getCurrentSentencesWithValues from './getCurrentSentencesWithValues';

// Note: the length is computed based on the result of insertVariables
// to avoid counting template variables like [CHINESE_FAMILY_NAME] in the
// .length() method

const getCurrentStatementLength = createSelector(
  getCurrentSentencesWithValues,
  sentences => {
    return sentences.reduce((sum, value) => {
      return sum + value.get('chinese').length;
    }, 0);
  }
);

export default getCurrentStatementLength;
