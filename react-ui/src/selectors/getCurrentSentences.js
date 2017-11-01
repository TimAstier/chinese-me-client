import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCurrentStatement from './getCurrentStatement';

const getCurrentSentences = createSelector(
  getCurrentStatement,
  s.entities.getSentences,
  (statement, sentences) => {
    const arrayOfSentences = [];
    if (statement && sentences) {
      statement.sentences.forEach(s => {
        arrayOfSentences.push(sentences.get(String(s)));
      });
    }
    return arrayOfSentences;
  }
);

export default getCurrentSentences;
